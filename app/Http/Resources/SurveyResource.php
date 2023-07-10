<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Survey */
class SurveyResource extends JsonResource
{
    /**
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [

        ];
    }
}
