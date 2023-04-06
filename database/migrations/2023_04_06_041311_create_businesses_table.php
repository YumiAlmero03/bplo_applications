<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBusinessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('businesses', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('trade_name', 255)->nullable();
            $table->string('type', 255);
            $table->string('number', 255);
            $table->string('tin', 255);
            $table->string('tax_payer_last_name', 255);
            $table->string('tax_payer_first_name', 255);
            $table->string('tax_payer_middle_name', 255);
            $table->string('region', 255);
            $table->string('province', 255);
            $table->string('city', 255);
            $table->string('brgy', 255);
            $table->string('zip_code', 255);
            $table->string('house', 255)->nullable();
            $table->string('bldg', 255)->nullable();
            $table->string('lot', 255)->nullable();
            $table->string('blk', 255)->nullable();
            $table->string('st', 255)->nullable();
            $table->string('sub', 255)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('businesses');
    }
}
