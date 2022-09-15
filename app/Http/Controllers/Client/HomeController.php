<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Page;
use App\Models\Slider;
use App\Models\Team;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {

        $page = Page::where('key', 'home')->firstOrFail();
        $sliders = Slider::query()->where("status", 1)->with(['file', 'translations']);
        $companies = Company::where("status", 1)->with(["file"])->get();
        $team = Team::where("status", 1)->with(["file"])->get();
        $images = [];
        foreach ($page->sections as $sections) {
            if ($sections->file) {
                $images[] = asset($sections->file->getFileUrlAttribute());
            } else {
                $images[] = null;
            }
        }


        return Inertia::render('Home/Home', [
            "sliders" => $sliders->get(),
            "companies" => $companies,
            "page" => $page,
            "team" => $team,
            'images' => $page->files,
            "seo" => [
                "title" => $page->meta_title,
                "description" => $page->meta_description,
                "keywords" => $page->meta_keyword,
                "og_title" => $page->meta_og_title,
                "og_description" => $page->meta_og_description,
                //            "image" => "imgg",
                //            "locale" => App::getLocale()
            ]
        ])->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }
}
