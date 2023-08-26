<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\SurveyAnswer */
class SurveyAnswerResource extends JsonResource
{
    /**
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'survey' => SurveyResource::make($this->whenLoaded('survey')),
            'end_date' => $this->end_date,
        ];
    }
}
