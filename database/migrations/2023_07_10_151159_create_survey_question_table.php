<?php

use App\Models\Survey;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('survey_question', function (Blueprint $table) {
            $table->id();
            $table->string('type', 45);
            $table->string('question', 2000);
            $table->longText('description')->nullable();
            $table->longText('data')->nullable();
            $table->foreignIdFor(Survey::class, 'survey_id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('survey_question');
    }
};
