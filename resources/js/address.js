import {
    regions,
    regionByCode,
    provinces,
    cities,
    barangays,
} from "select-philippines-address";

const zipcodes = require('zipcodes-ph');

var businessRegion = document.getElementById("businessRegion");
var businessProvince = document.getElementById("businessProvince");
var businessCity = document.getElementById("businessCity");
var businessBarangay = document.getElementById("businessBarangay");
var newOption = document.createElement("option");

regions().then((region) => 
    region.map(( data ) => {
            businessRegion.innerHTML+="<option value='"+data.region_name+"' data-regCode='"+data.region_code+"'>"+data.region_name+"</option>";
        }
    )
    ); 

//get province
businessRegion.addEventListener('change', function() {
    const regCode = this.options[this.selectedIndex].getAttribute("data-regCode");

    businessProvince.innerHTML = "<option disabled selected>Province</option>";

      provinces(regCode).then((province) => 
        province.map(( data ) => {
                businessProvince.innerHTML+="<option value="+data.province_name+" data-regCode="+data.province_code+">"+data.province_name+"</option>";
            }
        )
    );
});

//get city
businessProvince.addEventListener('change', function() {
    const regCode = this.options[this.selectedIndex].getAttribute("data-regCode");
    businessCity.innerHTML = "<option disabled selected>City/Municipality</option>";

      cities(regCode).then((province) => 
        province.map(( data ) => {
                businessCity.innerHTML+="<option value="+data.city_name+" data-regCode="+data.city_code+">"+data.city_name+"</option>";
            }
        )
    );
});
//get brgy and zipcode
businessCity.addEventListener('change', function() {
    const regCode = this.options[this.selectedIndex].getAttribute("data-regCode");
    businessBarangay.innerHTML = "<option disabled selected>Barangay</option>";

    barangays(regCode).then((province) => 
        province.map(( data ) => {
                businessBarangay.innerHTML+="<option value="+data.brgy_name+" data-regCode="+data.brgy_code+">"+data.brgy_name+"</option>";
                console.log(data)
            }
        )
    );
    
});

//get zipcode
