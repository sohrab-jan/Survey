<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SurveyQuestionAnswer extends Model
{
    protected $table = 'survey_question_answer';

    protected $fillable = ['survey_question_id', 'survey_answer_id', 'answer'];
}
