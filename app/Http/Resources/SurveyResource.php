<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Survey */
class SurveyResource extends JsonResource
{
    /**
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'slug' => $this->slug,
            'image_url' => $this->image_url,
            'status' => (bool)$this->status,
            'created_at' => $this->created_at->format('y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('y-m-d H:i:s'),
            'expire_date' => $this->expire_date->format('y-m-d'),
            'questions' => SurveyQuestionResource::collection($this->questions),
        ];
    }
}
