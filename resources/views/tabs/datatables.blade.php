@extends('layout')

@section('body')
       <table class="table">
        <thead>
          <tr>
            <th scope="col">Taxpayer Name</th>
            <th scope="col">Application Type</th>
            <th scope="col">Business Name</th>
            <th scope="col">Business Address</th>
            <th scope="col">Type OF Business</th>
            <th scope="col">Barangay</th>
            <th scope="col">Tax Declaration Number(TDN)</th>
            <th scope="col">Action</th>
          </tr> 
        </thead>
        <tbody>
          @foreach ($businesses as $business)
          <tr>
            <th scope="row">{{ $business->tax_payer_last_name }}, {{ $business->tax_payer_first_name }} {{ $business->tax_payer_middle_name }}</th>
            <th scope="row">{{ $business->id }}</th>
            <th scope="row">{{ $business->name }}</th>
            <th scope="row">{{ $business->house }} {{ $business->bldg }} {{ $business->lot }} {{ $business->blk }} {{ $business->st }} {{ $business->sub }} {{ $business->brg }} {{ $business->city }} {{ $business->province }} {{ $business->region }} {{ $business->zipcode }} </th>
            <th scope="row">{{ mb_convert_case($business->type, MB_CASE_UPPER, "UTF-8") }}</th>
            <th scope="row">{{ $business->brgy }}</th>
            <th scope="row">{{ $business->tin }}</th>
            <td>
              <a href="{{ route('business.edit', ['id' => $business->id]) }}" class="btn btn-success">Edit</a>
              <a href="{{ route('business.remove', ['id' => $business->id]) }}" class="btn btn-danger">Remove</a>
            </td>
          </tr>
          @endforeach
          
        </tbody>
      </table>
    @endsection