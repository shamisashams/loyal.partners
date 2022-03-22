<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CompanyRequest;
use App\Http\Requests\Admin\GalleryRequest;
use App\Http\Requests\Admin\ProductRequest;
use App\Models\Category;
use App\Models\Company;
use App\Models\Gallery;
use App\Models\Product;
use App\Repositories\CategoryRepositoryInterface;
use App\Repositories\CompanyRepositoryInterface;
use App\Repositories\GalleryRepositoryInterface;
use App\Repositories\ProductRepositoryInterface;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Arr;

class CompanyController extends Controller
{
    /**
     * @var CompanyRepositoryInterface
     */
    private $companyRepository;

    /**
     * @param GalleryRepositoryInterface $companyRepository
     */
    public function __construct(
        CompanyRepositoryInterface  $companyRepository
    )
    {
        $this->companyRepository = $companyRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index(GalleryRequest $request)
    {
        return view('admin.pages.company.index', [
            'companies' => $this->companyRepository->getData($request)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View
     */
    public function create()
    {
        $company = $this->companyRepository->model;

        $url = locale_route('company.store', [], false);
        $method = 'POST';

//        dd($gallery);

        return view('admin.pages.company.form', [
            'company' => $company,
            'url' => $url,
            'method' => $method,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ProductRequest $request
     *
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function store(CompanyRequest $request)
    {
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];

        $company = $this->companyRepository->create($saveData);
//        dd($saveData);

        // Save Files
//        if ($request->hasFile('images')) {
//            $company = $this->companyRepository->saveFiles($company->id, $request);
//        }

        return redirect(locale_route('company.show', $company->id))->with('success', __('admin.create_successfully'));

    }

    /**
     * Display the specified resource.
     *
     * @param string $locale
     * @param Product $product
     *
     * @return Application|Factory|View
     */
    public function show(string $locale, Company $company)
    {
        return view('admin.pages.company.show', [
            'company' => $company,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param string $locale
     * @param Category $category
     *
     * @return Application|Factory|View
     */
    public function edit(string $locale, Company $company)
    {
        $url = locale_route('company.update', $company->id, false);
        $method = 'PUT';

        return view('admin.pages.company.form', [
            'company' => $company,
            'url' => $url,
            'method' => $method,

        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ProductRequest $request
     * @param string $locale
     * @param Product $product
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function update(CompanyRequest $request, string $locale, Company $company)
    {
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];

        $this->companyRepository->update($company->id, $saveData);

        $this->companyRepository->saveFiles($company->id, $request);


        return redirect(locale_route('company.show', $company->id))->with('success', __('admin.update_successfully'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param string $locale
     * @param Product $product
     * @return Application|RedirectResponse|Redirector
     */
    public function destroy(string $locale, Company $company)
    {
        if (!$this->companyRepository->delete($company->id)) {
            return redirect(locale_route('company.show', $company->id))->with('danger', __('admin.not_delete_message'));
        }
        return redirect(locale_route('company.index'))->with('success', __('admin.delete_message'));
    }
}
