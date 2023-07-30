<?php

namespace Database\Seeders;

use App\Models\Survey;
use App\Models\SurveyQuestion;
use Illuminate\Database\Seeder;

class QuestionTableSeeder extends Seeder
{
    public function run()
    {
        SurveyQuestion::create([
            'type' => 'select',
            'question' => 'question',
            'description' => 'question test',
            //            'data' =>[],
            'survey_id' => Survey::first()->id,
        ]);
    }
}
