<?php

namespace App\Http\Controllers;


use App\Models\Departamento;
use Illuminate\Http\Request;

class InscriptionController extends Controller
{

    public function getDepartaments(Request $request)
    {
        if ($request->ajax()) {
            $Departaments = Departamento::with('municipies')->get()->map(function ($departament) {
                return [
                    "departament" => [
                        "id" => $departament->id,
                        "text" => $departament->nombre
                    ],
                    "municipies" => $departament->municipies->map(function ($municipie) {
                        return [
                            "id" => $municipie->id,
                            "text" => $municipie->nombre
                        ];
                    })
                ];
            });
            return response()->json($Departaments);
        }
    }
}
