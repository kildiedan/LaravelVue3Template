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
    public function update(Request $request)
    {

        $validated = $this->validate($request, [
            'title' => 'required',
        ]);
        Category::findOrFail($request->id)->update($request->all());

        return Category::all();
    }
    public function store(Request $request)
    {

        $validated = $this->validate($request, [
            'title' => 'required',
        ]);

        $Category = Category::create([
            'title' => $request['title'],
        ]);
    }
}
