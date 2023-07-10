<?php

use App\Models\SurveyAnswer;
use App\Models\SurveyQuestion;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('survey_question_answer', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(SurveyQuestion::class,'survey_question_id');
            $table->foreignIdFor(SurveyAnswer::class,'survey_answer_id');
            $table->text('answer');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('survey_question_answer');
    }
};
