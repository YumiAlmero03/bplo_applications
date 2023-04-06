<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBussiness extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'businessName' => 'required|max:255',
            'businessTradeName' => 'max:255',
            'businessType' => 'required|max:255',
            'businessNo' => 'required|integer',
            'businessTIN' => 'required|integer',
            'businessTaxLN' => 'required|max:255',
            'businessTaxFN' => 'required|max:255',
            'businessTaxMN' => 'required|max:255',
            'businessRegion' => 'required|max:255',
            'businessProvince' => 'required|max:255',
            'businessCity' => 'required|max:255',
            'businessBarangay' => 'required|max:255',
            'businessZipCode' => 'required|integer|min:4',
            'businessHouse' => 'max:255',
            'businessBldg' => 'max:255',
            'businessLot' => 'max:255',
            'businessBlk' => 'max:255',
            'businessSt' => 'max:255',
            'businessSub' => 'max:255',
        ];
    }
}
