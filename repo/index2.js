var hotel = {
    rooms: [{
            name: "Double Bed",
            price: "$75.00",
            available: 40
        },
        {
            name: "King Bed",
            price: "$120.00",
            available: 20
        },
        {
            name: "Luxery Suite",
            price: "$250.00",
            available: 5
        }
    ],
    name: "CareerDevs Innt"
}

function displayInfo(room) {
    document.getElementById('price').innerHTML = hotel.rooms[room].price;
    document.getElementById('available').innerHTML = hotel.rooms[room].available;
}

for (var i = 0; i < hotel.rooms.length; i++) {
    var radioBtn = document.createElement('INPUT');
    var radioLbl = document.createElement('LABEL');
    radioBtn.setAttribute('type', "radio");
    radioBtn.setAttribute('name', "rooms");
    radioBtn.setAttribute('value', i);
    radioBtn.setAttribute('id', "room" + i);
    radioLbl.innerHTML = hotel.rooms[i].name;
    radioBtn.setAttribute("onclick", `displayInfo(${i})`);
    document.getElementById('radialSection').appendChild(radioBtn);
    document.getElementById('radialSection').appendChild(radioLbl);
}

document.getElementById("reservationForm").onsubmit= function(event){
    event.preventDefault();
    
    if(!document.getElementById("confirmation").checked) {
        alert("Please agree to conditions");
        return;
    }
      var radios = document.getElementsByName("rooms");
      var roomSelection; 
      for (var i = 0; i < radios.length; i++) {
          if (radios[i].checked) {
              roomSelection = radios.value();
              break;
              
             
              
            
              
          }
          
               }
               if (roomSelection == "") {
                 alert ("No selection made");
                 return;
               }
                 alert ("Thank you for reserving the room" + hotel.rooms[parseInt(roomSelection)].name + ".")
               }
 




// console.log(document.getElementById("radio").nodeName)