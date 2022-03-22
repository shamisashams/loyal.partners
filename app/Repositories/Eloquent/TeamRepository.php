<?php
/**
 *  app/Repositories/Eloquent/ProductRepository.php
 *
 * Date-Time: 30.07.21
 * Time: 10:36
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */

namespace App\Repositories\Eloquent;


use App\Models\Product;
use App\Models\Team;
use App\Repositories\Eloquent\Base\BaseRepository;
use App\Repositories\ProductRepositoryInterface;
use App\Repositories\TeamRepositoryInterface;

/**
 * Class LanguageRepository
 * @package App\Repositories\Eloquent
 */
class TeamRepository extends BaseRepository implements TeamRepositoryInterface
{
    /**
     * @param \App\Models\Product $model
     */
    public function __construct(Team $model)
    {
        parent::__construct($model);
    }

}
