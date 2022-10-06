<?php

namespace App\Http\Controllers;

use App\Models\Response;
use Illuminate\Http\Request;

class ResponseController extends Controller
{
    //
    public function index()
    {
        $Response = Response::all();
        return $Response;
    }
    public function delete(Request $request)
    {
        $Response = Response::findOrFail($request->id)->delete();
        return Response::all();
    }
}
