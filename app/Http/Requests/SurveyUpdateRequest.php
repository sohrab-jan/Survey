<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SurveyUpdateRequest extends FormRequest
{
    public function rules()
    {
        return [
            'title' => ['required', 'string', 'max:100'],
            'image' => ['string'],
            'user_id' => ['exists:users,id'],
            'status' => ['required', 'boolean'],
            'description' => ['nullable', 'string'],
            'expire_date' => ['nullable', 'date', 'after:today'],
            'questions' => ['array'],
        ];
    }

    public function authorize()
    {
        $survey = $this->route('survey');
        if (auth()->id() !== $survey->user_id) {
            return false;
        }

        return true;
    }
}
