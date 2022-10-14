<?php

namespace App\Http\Controllers;

use App\Models\TicketCategory;
use Illuminate\Http\Request;

class TicketCategoryController extends Controller
{
    //
    public function index()
    {
        $TicketCategory = TicketCategory::all();
        return $TicketCategory;
    }
}
