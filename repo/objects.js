var cars = { 
   businessname: 'Enterprise Car Rental',
   types: ['Economy','Midsize'],
   econCars: 2,
   midsizeCars: 1
};

var userfirstName;
var userlastName;
var carSize;


window.onload = function(){
   document.getElementById("businame").innerHTML = cars.businessname;
};

function displayCars(){
   document.getElementById("econcars").innerHTML = cars.types[0];
   document.getElementById("econcarsavail").innerHTML = cars.econCars;
   document.getElementById("midsizecars").innerHTML = cars.types[1];
   document.getElementById("midsizecarsavail").innerHTML = cars.midsizeCars;
};

function midsizeClick(){
   cars.midsizeCars--;
   document.getElementById("midsizecarsavail").innerHTML = cars.midsizeCars;
};
function econsizeClick(){
   cars.econCars--;
   document.getElementById("econcarsavail").innerHTML = cars.econCars;
};

function rentnowClick(){
   cars.econCars--;
   document.getElementById("econcarsavail").innerHTML = cars.econCars;
};

var carType;
var firstName;
var lastName;
var size;
var carChoice;

document.addEventListener("DOMContentLoaded", mainFunction, false);

//set event listeners
function mainFunction() {
  document
    .getElementById("confirmButton")
    .addEventListener("click", getCustomerData, false);
  document
    .getElementById("confirmButton")
    .addEventListener("click", getReservationData, false);
}

function getCustomerData() {

    carType = document.getElementById("carChoice").value;
    firstName = document.getElementById("userfirstName").value;
    lastName = document.getElementById("userlastName").value;

if (
    firstName === "" ||
    lastName === "" ||
    carType === "" ||
    carChoice === ""
  
     ) 
    alert("Please enter your full name a pick a car size!");
  else
 // document.getElementById("rentalForm").setAttribute("class", "hide");
    //document.getElementById("orderDetails").removeAttribute("class");
    
     document.getElementById("nameOutput").innerHTML =
      carSize + " " + userfirstName + " " + userlastName;
      
      document.getElementById("confirmButton").addEventListener("click", function() {
  alert(
    "Thank you for your rental order. We look forward to seeing you at Duke Nukem's Tank Rental"
  );
  
  
});
//If econcarsAvailable = 0 when selected or midsizecarsavailable = 0 when selected, alert.
function checkcarsRemain() {

    carType = document.getElementById("carType").value;
    firstName = document.getElementById("userfirstName").value;
    lastName = document.getElementById("userlastName").value;
}
// If there are no econ cars left, when selected or no midsizecarsavail, when selected, or user did not indicate car size, alert!
if (
    econcarsAvail <= 0 ||
    midSizeCarsAvail <= 0 === "" ||
    carChoice === ""
  
     ) {
    alert("Please enter your full name a pick a car size!");
  } else
 // document.getElementById("rentalForm").setAttribute("class", "hide");
    //document.getElementById("orderDetails").removeAttribute("class");
    
     document.getElementById("nameOutput").innerHTML =
      carSize + " " + userfirstName + " " + userlastName;
      
      document.getElementById("confirmButton").addEventListener("click", function() {
  alert(
    "Thank you for your rental order. We look forward to seeing you at Duke Nukem's Tank Rental"
  );
  
  
});
