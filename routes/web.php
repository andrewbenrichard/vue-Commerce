<?php

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

Route::get('/', 'MainController@index')->name('home');

Auth::routes();

Route::get('{path}', 'MainController@index')->where('path', '([A-z\d\-\/_.]+)?');
Route::get('/dashboard', 'HomeController@index')->name('dashboard');
/* used to handle vue routes */
Route::get('{path}', 'HomeController@index')->where('path', '([A-z\d\-\/_.]+)?');
