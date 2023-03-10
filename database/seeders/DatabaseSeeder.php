<?php

namespace Database\Seeders;

use App\Models\PageSection;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            //            ApartmentSeeder::class,
            //            FloorSeeder::class,
            LanguageSeeder::class,
            PageSeeder::class,
            SettingSeeder::class,
            UserSeeder::class,
            PageSeeder::class,
            PageSectionSeeder::class,

        ]);
    }
}
