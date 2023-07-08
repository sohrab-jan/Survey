<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class SignUpRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required','string'],
            'email' => ['required','email','string','unique:users,email'],
            'password' => ['required','confirmed', Password::min(8)->mixedCase()->numbers()->symbols()],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
