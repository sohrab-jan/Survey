<?php

use App\Models\Survey;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('survey_answer', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Survey::class,'survey_id');
            $table->timestamp('start_date');
            $table->timestamp('end_date');
        });
    }

    public function down()
    {
        Schema::dropIfExists('survey_answer');
    }
};
