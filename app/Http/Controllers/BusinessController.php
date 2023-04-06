<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreBussiness;
use App\Models\Business;

class BusinessController extends Controller
{
    public function index()
    {
        $businesses = Business::all();
        return view('tabs.datatables', ['businesses' => $businesses]);
    }
    public function store(StoreBussiness $request)
    {
        Business::create([
            'name' => $request->businessName,
            'trade_name' => $request->businessTradeName,
            'type' => $request->businessType,
            'number' => $request->businessNo,
            'tin' => $request->businessTIN,
            'tax_payer_last_name' => $request->businessTaxLN,
            'tax_payer_first_name' => $request->businessTaxFN,
            'tax_payer_middle_name' => $request->businessTaxMN,
            'region' => $request->businessRegion,
            'province' => $request->businessProvince,
            'city' => $request->businessCity,
            'brgy' => $request->businessBarangay,
            'zip_code' => $request->businessZipCode,
            'house' => $request->businessHouse,
            'bldg' => $request->businessBldg,
            'lot' => $request->businessLot,
            'blk' => $request->businessBlk,
            'st' => $request->businessSt,
            'sub' => $request->businessSub,
        ]);
        return back();

    }

    public function edit($id)
    {
        $business = Business::find($id);
        return view('tabs.edit', ['business' => $business]);
    }
    public function update($id, StoreBussiness $request)
    {
        $business = Business::find($id);
        $business->name = $request->businessName;
        $business->trade_name = $request->businessTradeName;
        $business->type = $request->businessType;
        $business->number = $request->businessNo;
        $business->tin = $request->businessTIN;
        $business->tax_payer_last_name = $request->businessTaxLN;
        $business->tax_payer_first_name = $request->businessTaxFN;
        $business->tax_payer_middle_name = $request->businessTaxMN;
        $business->region = $request->businessRegion;
        $business->province = $request->businessProvince;
        $business->city = $request->businessCity;
        $business->brgy = $request->businessBarangay;
        $business->zip_code = $request->businessZipCode;
        $business->house = $request->businessHouse;
        $business->bldg = $request->businessBldg;
        $business->lot = $request->businessLot;
        $business->blk = $request->businessBlk;
        $business->st = $request->businessSt;
        $business->sub = $request->businessSub;
        $business->save();
        return back();
    }
    public function remove($id)
    {
        $flight = Business::find($id);
 
        $flight->delete();
        return back();
    }
}
