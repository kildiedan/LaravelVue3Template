<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //
    public function index()
    {
        $Category = Category::all();
        return $Category;
    }
    public function delete(Request $request)
    {
        $Category = Category::findOrFail($request->id)->delete();
        return Category::all();
    }
}
