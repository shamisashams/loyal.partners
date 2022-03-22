<?php
/**
 *  app/Repositories/ProductRepositoryInterface.php
 *
 * Date-Time: 30.07.21
 * Time: 10:35
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */
namespace App\Repositories;


use App\Http\Requests\Admin\ProductRequest;
use App\Http\Requests\Admin\TeamRequest;


interface TeamRepositoryInterface
{

    /**
     * @param ProductRequest $request
     * @param array $with
     *
     * @return mixed
     */
    public function getData(TeamRequest $request, array $with = []);
}
