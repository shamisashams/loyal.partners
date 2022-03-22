<?php
/**
 *  app/Repositories/Eloquent/ProductRepository.php
 *
 * Date-Time: 30.07.21
 * Time: 10:36
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */

namespace App\Repositories\Eloquent;


use App\Models\Company;
use App\Repositories\CompanyRepositoryInterface;
use App\Repositories\Eloquent\Base\BaseRepository;

/**
 * Class LanguageRepository
 * @package App\Repositories\Eloquent
 */
class CompanyRepository extends BaseRepository implements CompanyRepositoryInterface
{
    /**
     * @param \App\Models\Company $model
     */
    public function __construct(Company $model)
    {
        parent::__construct($model);
    }

}
