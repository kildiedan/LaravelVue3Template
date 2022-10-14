<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    //
    public function index()
    {
        $Ticket = Ticket::all();
        return $Ticket;
    }
    public function delete(Request $request)
    {
        $Ticket = Ticket::findOrFail($request->id)->delete();
        return Ticket::all();
    }
    public function store(Request $request)
    {
        // $validated = $this->validate($request, [
        //     'title' => 'required',
        //     'content' => 'required',
        //     'createdBy' => 'required',
        // ]);

        $Ticket = Ticket::create([
            'title' => $request['title'],
            'content' => $request['content'],
            'assigendTo' => null,
            'createdBy' => $request['createdBy'],
            'status_id' => 1,

        ]);
    }
}
