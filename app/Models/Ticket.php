<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'content', 'assigend_to', 'created_by', 'status_id'
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
    public function status()
    {
        return $this->belongsTo(Status::class);
    }
}
