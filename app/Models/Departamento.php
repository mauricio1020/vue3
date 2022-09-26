<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Departamento extends Model
{
    use HasFactory;


    protected $fillable = ['id','nombre', 'codigo', 'ciudad'];


    public function municipies(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Municipio::class, "idDepartamento", "id");
    }
}



