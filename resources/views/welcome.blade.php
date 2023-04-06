@extends('layout')

@section('body')
        <div class="row g-0">
          <div class="col-md-3">
            @include('components/sidebar')
          </div>
          <div class="col-md-9">
            @include('components/tab')
            <div class="tab-content p-3" id="myTabContent">
              <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                @include('tabs/registration')
              </div>
              <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                @include('tabs/registration')
              </div>
              <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                @include('tabs/registration')
              </div>
            </div>
          </div>
        </div>
    @endsection