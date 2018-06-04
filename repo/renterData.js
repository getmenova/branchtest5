var carType;
var firstName;
var lastName;
var size;
var carChoice;

document.addEventListener("DOMContentLoaded", mainFunction, false);

//set event listeners
function mainFunction() {
  document
    .getElementById("submitCustomerInfo")
    .addEventListener("click", getCustomerData, false);
  document
    .getElementById("reservationButton")
    .addEventListener("click", getReservationData, false);
}

function getCustomerData() {

    carType = document.getElementById("carType").value;
    firstName = document.getElementById("firstNameInput").value;
    lastName = document.getElementById("lastNameInput").value;
}

if (
    firstName === "" ||
    lastName === "" ||
    carType === "" ||
    carChoice === ""
  
     ) {
    alert("Please complete all entry fields!");
  } else
   document.getElementById("rentalForm").setAttribute("class", "hide");
    document.getElementById("orderDetails").removeAttribute("class");
    
     document.getElementById("nameOutput").innerHTML =
      carType + " " + firstName + " " + lastName;
      
      document.getElementById("confirmButton").addEventListener("click", function() {
  alert(
    "Thank you for your rental order. We look forward to seeing you at Duke Nukem's Tank Rental"
  );
});
