<?php

namespace App\Http\Controllers;

use App\Models\Status;
use Illuminate\Http\Request;

class StatusController extends Controller
{
    //
    public function index()
    {
        $Status = Status::all();
        return $Status;
    }
    public function delete(Request $request)
    {
        $Status = Status::findOrFail($request->id)->delete();
        return Status::all();
    }
}
