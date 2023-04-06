<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BusinessController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome', ['business' => null]);
})->name('business.register');
Route::post(
    '/business/store',
    [BusinessController::class, 'store']
)->name('business.store');
Route::get(
    '/business',
    [BusinessController::class, 'index']
)->name('business');
Route::get(
    '/business/remove/{id}',
    [BusinessController::class, 'remove']
)->name('business.remove');
Route::get(
    '/business/edit/{id}',
    [BusinessController::class, 'edit']
)->name('business.edit');
Route::post(
    '/business/update/{id}',
    [BusinessController::class, 'update']
)->name('business.update');