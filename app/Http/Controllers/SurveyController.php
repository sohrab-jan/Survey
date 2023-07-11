<?php

namespace App\Http\Controllers;

use App\Http\Enums\QuestionTypeEnum;
use App\Http\Requests\SurveyStoreRequest;
use App\Http\Requests\SurveyUpdateRequest;
use App\Http\Resources\SurveyResource;
use App\Models\Survey;
use App\Models\SurveyQuestion;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\Enum;

class SurveyController extends Controller
{
    public function index()
    {
        return SurveyResource::collection(
            Survey::where('user_id', auth()->id())
                ->orderBy('created_at', 'desc')
                ->paginate(10)
        );
    }

    public function store(SurveyStoreRequest $request)
    {
        $data = $request->validated();
        if (isset($data['image'])) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;
        }
        $survey = Survey::create($data);

        foreach ($data['questions'] as $question) {
            $question['survey_id'] = $survey->survey_id;
            $this->createQuestion($question);
        }

        return new SurveyResource($survey);
    }

    public function update(Survey $survey, SurveyUpdateRequest $request)
    {
        $data = $request->validated();

        if (isset($data['image'])) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;

            if ($survey->image) {
                $absolutePath = public_path($survey->image);
                File::delete($absolutePath);
            }
        }
        $survey->update($data);
        $existingIds = $survey->questions()->pluck('id')->toArray();
        $newIds = Arr::pluck($data['questions'], 'id');

        $toDelete = array_diff($existingIds, $newIds);
        $toAdd = array_diff($newIds, $existingIds);

        SurveyQuestion::delete($toDelete);
        foreach ($data['questions'] as $question) {
            if (in_array($question['id'], $toAdd)) {
                $question['survey_id'] = $survey->id;
                $this->createQuestion($question);
            }
        }
        $questionMap = collect($data['questions'])->keyBy('id');
        foreach ($survey->questions as $question) {
            if (isset($questionMap[$question->id])) {
                $this->updateQuestion($question, $questionMap[$question->id]);
            }
        }

        return new SurveyResource($survey);
    }

    public function show(Survey $survey)
    {
        if (auth()->id() !== $survey->user_id) {
            return abort(403, 'Unauthorized action');
        }

        return new SurveyResource($survey);
    }

    public function destroy(Survey $survey)
    {
        if (auth()->id() !== $survey->user_id) {
            abort(403, 'Unauthorized action');
        }

        $survey->delete();

        if ($survey->image) {
            $absolutePath = public_path($survey->image);
            File::delete($absolutePath);
        }

        return response('', 204);
    }

    private function createQuestion($data)
    {
        if (is_array($data['data'])) {
            $data['data'] = json_encode($data['data']);
        }
        $validator = Validator::make($data, [
            'question' => ['required', 'string'],
            'type' => ['required', new Enum(QuestionTypeEnum::class)],
            'description' => ['nullable', 'string'],
            'data' => ['present'],
            'survey_id' => ['exists:surveys,id'],
        ]);

        return SurveyQuestion::create($validator->validated());
    }

    protected function updateQuestion(SurveyQuestion $question, $data)
    {
        if (is_array($data['data'])) {
            $data['data'] = json_encode($data['data']);
        }
        $validator = Validator::make($data, [
            'id' => ['exists:survey_questions,id'],
            'question' => ['required', 'string'],
            'type' => ['required', new Enum(QuestionTypeEnum::class)],
            'description' => ['nullable', 'string'],
            'data' => ['present'],
        ]);

        return $question->update($validator->validated());
    }

    private function saveImage($image)
    {

        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
            $image = substr($image, strpos($image, ',') + 1);
            $type = strtolower($type[1]);
            if (! in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
                throw new \Exception('Invalid image type');
            }
            $image = str_replace('', '+', $image);
            if ($image === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('did not match data uri with image data');
        }

        $dir = 'images/';
        $file = Str::random().'.'.$type;
        $absolutePath = public_path($dir);
        $relativePath = $dir.$file;
        if (! File::exists($absolutePath)) {
            File::makeDirectory($absolutePath, $image);
        }
        file_put_contents($relativePath, $image);

        return $relativePath;
    }
}
