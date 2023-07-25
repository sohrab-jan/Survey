<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\URL;

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
            'image_url' => $this->image_url ? URL::to($this->image_url) : null,
            'status' => (bool) $this->status,
            'created_at' => $this->created_at/*->format('Y-m-d H:i:s')*/,
            'updated_at' => $this->updated_at/*->format('Y-m-d H:i:s')*/,
            'expire_date' => $this->expire_date/*->format('Y-m-d')*/,
            'questions' => SurveyQuestionResource::collection($this->questions),
        ];
    }
}
