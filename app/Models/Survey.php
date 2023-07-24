<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Survey extends Model
{
    use HasSlug;

    protected $fillable = [
        'user_id',
        'image',
        'title',
        'slug',
        'status',
        'description',
        'expire_date',
    ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }
    public function questions(): HasMany
    {
        return $this->hasMany(SurveyQuestion::class);
    }
}
