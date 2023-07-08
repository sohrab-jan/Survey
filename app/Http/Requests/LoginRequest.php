<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'email' => ['required','email','string','unique:users,email'],
            'password' => ['required'],
            'remember' => ['boolean'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
