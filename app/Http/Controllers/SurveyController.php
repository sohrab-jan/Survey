<?php

namespace App\Http\Controllers;

use App\Http\Requests\SurveyStoreRequest;
use App\Http\Requests\SurveyUpdateRequest;
use App\Http\Resources\SurveyResource;
use App\Models\Survey;

class SurveyController extends Controller
{
    public function index()
    {
        return SurveyResource::collection(
            Survey::where('user_id',auth()->id())
                ->orderBy('created_at','desc')
                ->paginate(10)
        );
    }

    public function store(SurveyStoreRequest $request)
    {

    }
    public function update(Survey $survey,SurveyUpdateRequest $request)
    {

    }
}
