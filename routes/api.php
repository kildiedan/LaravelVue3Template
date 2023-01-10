<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ResponseController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\TicketCategoryController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('tickets', [TicketController::class, 'index']);
Route::post('tickets', [TicketController::class, 'store']);
Route::get('tickets/show', [TicketController::class, 'show']);
Route::post('tickets/update', [TicketController::class, 'update']);

Route::get('/category', [CategoryController::class, 'index']);
Route::post('/category', [CategoryController::class, 'store']);
Route::post('/category/delete', [CategoryController::class, 'delete']);
Route::post('/category/update', [CategoryController::class, 'update']);
Route::post('/category/show', [CategoryController::class, 'show']);

Route::get('/response', [ResponseController::class, 'index']);
Route::post('/response/update', [ResponseController::class, 'update']);
Route::post('/response/create', [ResponseController::class, 'store']);

Route::get('/status', [StatusController::class, 'index']);

Route::get('/ticketsCategory', [TicketCategoryController::class, 'index']);

Route::get('/user', [UserController::class, 'index']);
Route::get('/user/register', [RegisterController::class, 'create']);
Route::get('/user/login', [LoginController::class, 'vuelogin']);
