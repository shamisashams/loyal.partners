<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Settings array
        $Settings = [
            [
                'key' => 'phone'
            ],
            [
                'key' => 'email'
            ],
            [
                'key' => 'address'
            ],
            [
                'key' => 'facebook'
            ],
            [
                'key' => 'youtube'
            ],
            [
                'key' => 'linkedin'
            ]

        ];

        // Insert Settings
        Setting::insert($Settings);
    }
}
