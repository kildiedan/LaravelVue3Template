<?php

namespace App\Http\Controllers;

use App\Models\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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
    public function update(Request $request)
    {
        $Response = Response::findOrFail($request->id)->update($request->all());

        return $Response;
    }
    public function store(Request $request)
    {
        $validated = $this->validate($request, [
            'user_id' => 'required',
            'content' => 'required',
            'ticket_id' => 'required',
            'email' => 'required',
        ]);

        $Response = Response::create([
            'content' => $validated['content'],
            'user_id' => $validated['user_id'],
            'ticket_id' => $validated['ticket_id'],
        ]);

        // Mail::to($validated['email'])->send(new \App\mail\ResponseMail($Response));

        return Response::all();
    }
}
