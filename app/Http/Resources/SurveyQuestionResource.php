<?php

namespace App\Http\Resources;

use App\Models\SurveyQuestion;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin SurveyQuestion */
class SurveyQuestionResource extends JsonResource
{
    /**
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'type' => $this->type,
            'question' => $this->question,
            'description' => $this->description,
            'data' => json_decode($this->data),
            'survey' => SurveyResource::make($this->whenLoaded('survey')),
        ];
    }
}
