<?php

namespace App\Http\Controllers;

use App\Http\Resources\SurveyAnswerResource;
use App\Http\Resources\SurveyDashboardResource;
use App\Models\Survey;
use App\Models\SurveyAnswer;

class DashboardController extends Controller
{
    public function index()
    {
        $total = Survey::query()->currentUser()->count();
        $latest = Survey::query()->currentUser()->latest('created_at')->first();

        $totalAnswers = SurveyAnswer::whereHas('survey', function ($query) {
            $query->where('user_id', auth()->id());
        })->count();

        $latestAnswers = SurveyAnswer::withWhereHas('survey', function ($query) {
            $query->where('user_id', auth()->id());
        })->orderBy('end_date', 'desc')->limit(5)->get();

        return [
            'total_surveys' => $total,
            'latest_survey' => SurveyDashboardResource::make($latest),
            'total_answers' => $totalAnswers,
            'latest_answer' => SurveyAnswerResource::collection($latestAnswers),
        ];
    }
}
