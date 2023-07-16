<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'sohrab',
            'email' => 'sohrab@gmail.com',
            'password' => bcrypt('Pa$$w0rd!'),
        ]);
    }
}
