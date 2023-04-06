<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    protected $fillable = [
    	'name', 
    	'trade_name',
	    'type',
	    'number',
	    'tin',
	    'tax_payer_last_name',
	    'tax_payer_first_name',
	    'tax_payer_middle_name',
	    'region',
	    'province',
	    'city',
	    'brgy',
	    'zip_code',
	    'house',
	    'bldg',
	    'lot',
	    'blk',
	    'st',
	    'sub',
    ];
}
