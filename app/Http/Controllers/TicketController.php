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
}
