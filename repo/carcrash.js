var cars = {
    name: "Enterprise Car Rental",
    types: ['economy', 'midsize'],
    economy: 15,
    midsize: 10,
    luxury: 5,
    priceEcon: '$80',
    priceMid: "$100",
    priceLux: "$120"
};
var rental = {
    economy: [],
    midsize: [],
    luxury: []
};
// var Rental = function(name, selection) {
//     this.name = name,
//         this.car = selection;
// };
// var renter = new Rental(document.getElementById("name"), document.getElementById("carSelection"));

window.onload = function() {
    document.getElementById("busName").innerHTML = cars.name;
};

function getCars() {
    var car = document.getElementById("carSelection").value;
    switch (car) {
        case "economy":
            cars.economy--;
            document.getElementById("econAvail").innerHTML = "Economy:" + cars.economy;
            document.getElementById("econ").innerHTML = "Economy:" + cars.priceEcon;
            break;
        case "midsize":
            cars.midsize--;
            document.getElementById("midAvail").innerHTML = "Midsize:" + cars.midsize;
            document.getElementById("mid").innerHTML = "Midsize:" + cars.priceMid;
            break;
        case "luxury":
            cars.luxury--;
            document.getElementById("luxAvail").innerHTML = "Luxury:" + cars.luxury;
            document.getElementById("lux").innerHTML = "Luxury:" + cars.priceLux;
            break;
    }
}

function addRenter() {
    var selection = document.forms["renter"]["carSelection"].value;
    var renter = document.forms["renter"]["name"].value;
    var economy = cars.economy;
    var midsize = cars.midsize;
    var luxury = cars.luxury;

    if (economy <= 0) {
        alert("That selection is not available. Please make a different selection");
        console.log(economy);
    }

    else if (midsize <= 0) {
        alert("That selection is not available. Please make a different selection");
        console.log(economy);
    }
    else if (luxury <= 0) {
        alert("That selection is not available. Please make a different selection");
        console.log(economy);
    }
    else if (selection == "blank") {
        alert("Please select type");
        console.log(selection);
    }
    else if (renter == "") {
        alert("Please enter name");
        console.log(renter);
    }
    else {
        rental[selection].push({
            name: renter
        });
        document.getElementById("display").innerHTML = "Thank you for your reservation!";
        console.log(rental);
    }
    return false;
}