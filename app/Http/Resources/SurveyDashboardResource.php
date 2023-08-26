<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\URL;

/** @mixin \App\Models\Survey */
class SurveyDashboardResource extends JsonResource
{
    /**
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'image_url' => $this->image_url ?? URL::to($this->image),
            'title' => $this->title,
            'slug' => $this->slug,
            'status' => (bool) $this->status,
            'description' => $this->description,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
            'expire_date' => $this->expire_date,
            'questions_count' => $this->questions->count(),
            'answer_count' => $this->answers->count(),
        ];
    }
}
