<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SurveyQuestion extends Model
{
    protected $table = 'survey_question';

    protected $fillable = [
        'type',
        'question',
        'description',
        'data',
        'survey_id',
    ];
}
