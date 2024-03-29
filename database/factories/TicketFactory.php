<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ticket>
 */
class TicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [

            'title' => fake()->sentence(),
            'content' => fake()->paragraph(),
            'assigend_to' => rand(1, 10),
            'created_by' => rand(1, 10),
            'status_id' => rand(1, 3),

        ];
    }
}
