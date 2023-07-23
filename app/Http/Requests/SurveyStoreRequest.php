<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SurveyStoreRequest extends FormRequest
{
    public function rules()
    {
        return [
            'title' => ['required', 'string', 'max:100'],
            'image' => ['nullable', 'string'],
            'user_id' => ['exists:users,id'],
            'status' => ['required', 'boolean'],
            'description' => ['nullable', 'string'],
            'expire_date' => ['nullable', 'date', 'after:today'],
            'questions' => ['required', 'array'],
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'user_id' => auth()->id(),
        ]);
    }

    public function authorize()
    {
        return true;
    }
}
