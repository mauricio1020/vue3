<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Municipio extends Model
{
    use HasFactory;

    protected $fillable = ['id','nombre', 'nombreDepartamento', 'municipioDepartamento','idDepartamento','idMunicipio'];

    public function departament(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Departamento::class, "id", "id");
    }
}
