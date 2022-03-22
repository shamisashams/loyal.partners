<?php
/**
 *  app/Models/Translations/ProductTranslation.php
 *
 * Date-Time: 30.07.21
 * Time: 10:34
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */
namespace App\Models\Translations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamTranslation extends BaseTranslationModel
{
    use HasFactory;

    /**
     * @var string[]
     */
    protected $fillable = [
        'full_name',
        'position',
        'experience',
        'education',
        'bottom_text',
    ];
}
