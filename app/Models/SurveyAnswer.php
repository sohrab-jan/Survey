<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SurveyAnswer extends Model
{
    protected $table = 'survey_answer';

    protected $fillable = ['survey_id', 'start_date', 'end_date', 'updated_at'];

    public $timestamps = false;

    public function survey()
    {
        return $this->belongsTo(Survey::class);
    }
}
