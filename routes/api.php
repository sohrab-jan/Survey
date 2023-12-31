<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SurveyController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('surveys', [SurveyController::class, 'store']);
    Route::get('surveys', [SurveyController::class, 'index']);
    Route::get('surveys/{survey}', [SurveyController::class, 'show']);
    Route::put('surveys/{survey}', [SurveyController::class, 'update']);
    Route::delete('surveys/{survey}', [SurveyController::class, 'destroy']);
    Route::get('me', [AuthController::class, 'show']);
    Route::get('/dashboard', [DashboardController::class, 'index']);
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/surveys/get-by-slug/{survey:slug}', [SurveyController::class, 'showBySlug']);
Route::post('/surveys/{survey}/answer', [SurveyController::class, 'storeAnswer']);
