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
    public function show(Request $request)
    {
        $Ticket = Ticket::find(10);
        return $Ticket;
    }
    public function update(Request $request)
    {
        $Ticket = Ticket::findOrFail($request->id)->update($request->all());

        return $Ticket;
    }
    public function delete(Request $request)
    {
        $Ticket = Ticket::findOrFail($request->id)->delete();
        return Ticket::all();
    }
    public function store(Request $request)
    {
        $validated = $this->validate($request, [
            'title' => 'required',
            'content' => 'required',
            'createdBy' => 'required',
        ]);

        $Ticket = Ticket::create([
            'title' => $validated['title'],
            'content' => $validated['content'],
            'assigendTo' => null,
            'createdBy' => $validated['createdBy'],
            'status_id' => 1,

        ]);
    }
}
