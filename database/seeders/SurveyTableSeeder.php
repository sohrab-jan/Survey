<?php

namespace Database\Seeders;

use App\Models\Survey;
use App\Models\User;
use Illuminate\Database\Seeder;

class SurveyTableSeeder extends Seeder
{
    public function run()
    {
        Survey::create([
            'user_id' => User::first()->id,
            'title' => 'Survey test 1',
            'status' => 1,
            'description' => 'survey test description',
            'expire_date' => '2098/10/10',
        ]);

        Survey::create([
            'user_id' => User::first()->id,
            'title' => 'Survey test 2',
            'status' => 1,
            'description' => 'survey test description',
            'expire_date' => '2098/10/05',
        ]);

        Survey::create([
            'user_id' => User::first()->id,
            'title' => 'Survey test 3',
            'status' => 1,
            'description' => 'survey test description',
            'expire_date' => '2098/10/20',
        ]);
    }
}
