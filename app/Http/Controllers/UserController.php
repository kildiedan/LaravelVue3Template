<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public function index()
    {
        $User = User::all();
        return $User;
    }
    public function delete(Request $request)
    {
        $User = User::findOrFail($request->id)->delete();
        return User::all();
    }
}
