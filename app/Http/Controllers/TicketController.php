<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    //
    public function index()
    {
        $Ticket = Ticket::orderBy("created_at", "asc")->get();
        return $Ticket;
    }
    public function show(Request $request)
    {
        $Ticket = Ticket::find(10);
        return $Ticket;
    }
    public function update(Request $request)
    {
        Ticket::findOrFail($request->id)->update($request->all());
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
            'created_by' => 'required',
        ]);

        $Ticket = Ticket::create([
            'title' => $validated['title'],
            'content' => $validated['content'],
            'assigend_to' => null,
            'created_by' => $validated['created_by'],
            'status_id' => 1,

        ]);
    }
}
