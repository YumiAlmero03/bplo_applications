@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
<form method="post" action="{{ $business ? route('business.update', ['id' => $business->id]) : route('business.store') }}">
  @csrf
  <div class="row g-3">
    <div class="col-md-6">
      <div class="form-header pb-3">
        <div class="row g-3">
          <div class="col-md-8">
            <h4><i class="fa-regular fa-solid fa-user mr-2"></i> Business Information</h4>
          </div>
          <div class="col-md-4">
            <div class="float-left">
              <select name="businessType" width="200px" id="businessType" class="form-select" aria-label="Default select example">
                <option disabled selected>Owner's Name</option>
                <option value="owner1">Owner 1</option>
                <option value="owner2">Owner 2</option>
                <option value="owner3">Owner 3</option>
                <option value="owner4">Owner 4</option>
                <option value="owner5">Owner 5</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="form-body bg-light p-3 mb-3">
        <div class="mb-3">
          <label for="businessName" class="form-label"> Business Name <span class="text-danger">*</span> </label>
          <input type="text" name="businessName" class="form-control" id="businessName" placeholder="Business Name" value="{{ $business->name ?? '' }}">
        </div>
        <div class="mb-3"> 
          <label for="businessTradeName" class="form-label">Trade Name/Francise (if applicable)</label>
          <input type="text" name="businessTradeName" class="form-control" id="businessTradeName" placeholder="Trade Name/Francise (if applicable)" value="{{ $business->trade_name ?? '' }}">
        </div>
        <div class="mb-3"> 
          <label for="businessType" class="form-label">Type of Business <span class="text-danger">*</span></label>
          <select name="businessType" id="businessType" class="form-select" aria-label="Default select example"> 
            {!! $business ? '<option selected>'.$business->type.'</option>' : '<option disabled selected>Select Type of Business</option>' !!}
            <option >Sole Proprietorship</option>
            <option >Partnership</option>
            <option >Limited Liability Company</option>
            <option >Corporation</option>
          </select>
        </div>
        <div class="mb-3"> 
          <label for="businessNo" class="form-label">DTI/SEC/CDA Registration No. <span class="text-danger">*</span></label>
          <input type="text" name="businessNo" class="form-control" id="businessNo" placeholder="DTI/SEC/CDA Registration No." value="{{ $business->number ?? '' }}">
        </div>
        <div class="mb-3"> 
          <label for="businessTIN" class="form-label">Tax Identification Number (TIN) <span class="text-danger">*</span></label>
          <input type="text" name="businessTIN" class="form-control" id="businessTIN" placeholder="Tax Identification Number (TIN)" value="{{ $business->tin ?? '' }}">
        </div>
      </div>
        
      <div class="form-header mb-3">
        <h4><i class="fa-regular fa-solid fa-user mr-2"></i> Taxpayer Information</h4>
      </div>
      <div class="form-body bg-light p-3">
        <div class="mb-3">
          <label for="businessTaxLN" class="form-label"> Last Name <span class="text-danger">*</span> </label>
          <input type="text" name="businessTaxLN" class="form-control" id="businessTaxLN" placeholder="Last Name" value="{{ $business->tax_payer_last_name ?? '' }}">
        </div>
        <div class="mb-3">
          <label for="businessTaxFN" class="form-label"> First Name <span class="text-danger">*</span> </label>
          <input type="text" name="businessTaxFN" class="form-control" id="businessTaxFN" placeholder="First Name" value="{{ $business->tax_payer_first_name ?? '' }}">
        </div>
        <div class="mb-3">
          <label for="businessTaxMN" class="form-label"> Middle Name <span class="text-danger">*</span> </label>
          <input type="text" name="businessTaxMN" class="form-control" id="businessTaxMN" placeholder="Middle Name" value="{{ $business->tax_payer_middle_name ?? '' }}">
        </div>
      </div>
    </div>

    <div class="col-md-6">
        <div class="form-header mb-3">
          <h4><i class="fa-regular fa-solid fa-user mr-2"></i> Main Office Address</h4>
        </div>
        <div class="form-body bg-light p-3">
          <div class="mb-3">
            <label for="businessRegion" class="form-label"> Region <span class="text-danger">*</span> </label>
            <select name="businessRegion" id="businessRegion" class="form-select" aria-label="Default select example">
              {!! $business ? '<option selected>'.$business->region.'</option>' : '<option disabled selected>Region</option>' !!}
            </select>
          </div>
          <div class="row g-2">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="businessProvince" class="form-label"> Province <span class="text-danger">*</span> </label>
                <select name="businessProvince" id="businessProvince" class="form-select" aria-label="Default select example">
                  {!! $business ? '<option selected>'.$business->province.'</option>' : '<option disabled selected>Province</option>' !!}
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="businessCity" class="form-label"> City/Municipality <span class="text-danger">*</span> </label>
                <select name="businessCity" id="businessCity" class="form-select" aria-label="Default select example">
                  {!! $business ? '<option selected>'.$business->city.'</option>' : '<option disabled selected>City/Municipality</option>' !!}
                </select>
              </div>
            </div>
          </div>

          <div class="row g-2">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="businessBarangay" class="form-label"> Barangay <span class="text-danger">*</span> </label>
                <select name="businessBarangay" id="businessBarangay" class="form-select" aria-label="Default select example">
                  {!! $business ? '<option selected>'.$business->brgy.'</option>' : '<option disabled selected>Barangay</option>' !!}
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="businessZipCode" class="form-label"> Zip Code <span class="text-danger">*</span> </label>
                <input type="text" name="businessZipCode" class="form-control" id="businessZipCode" placeholder="Zip Code" value="{{ $business->zip_code ?? '' }}">
              </div>
            </div>
          </div>

          <div class="row g-2">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="businessHouse" class="form-label">House / Bldg No.</label>
                <input type="text" name="businessHouse" class="form-control" id="businessHouse" placeholder="House / Bldg No." value="{{ $business->house ?? '' }}">
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="businessBldg" class="form-label">Name of Building</label>
                <input type="text" name="businessBldg" class="form-control" id="businessBldg" placeholder="Name of Building" value="{{ $business->bldg ?? '' }}">
              </div>
            </div>
          </div>

          <div class="row g-2">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="businessLot" class="form-label">Lot No.</label>
                <input type="text" name="businessLot" class="form-control" id="businessLot" placeholder="Lot No." value="{{ $business->lot ?? '' }}">
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="businessBlk" class="form-label">Block No.</label>
                <input type="text" name="businessBlk" class="form-control" id="businessBlk" placeholder="Block No." value="{{ $business->blk ?? '' }}">
              </div>
            </div>
          </div>

          <div class="mb-3"> 
            <label for="businessSt" class="form-label">Street</label>
            <input type="text" name="businessSt" class="form-control" id="businessSt" placeholder="Street" value="{{ $business->st ?? '' }}">
          </div>

          <div class="mb-3"> 
            <label for="businessSub" class="form-label">Subdivision</label>
            <input type="text" name="businessSub" class="form-control" id="businessSub" placeholder="Subdivision" value="{{ $business->sub ?? '' }}">
          </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>