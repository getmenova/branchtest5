/*global $*/  //THANKS CLIFF!
//Let's create the variable 'quotes' and store our quote collection as an array. Let's break each quote down by the text we want displayed, and who said it, stored as 'quote' and 'name' respectively.

var quotes = [{
  quote: "Thank you so much for-to-playing my game!",
  name: "-Mario"
}, {
  quote: "He-ey, Mario, buddy, howzit goin'? Step right up. You look like a fast sleddin' kind of guy. I know speed when I see it, yes siree--I'm the world champion sledder, you know. Whaddya say? How about a race? Ready...",
  name: "-Big Penguin"
}, {
  quote: "Hi! I'll prepare the cannon for you! Bon voyage!",
  name: "-Bob-omb Buddy"
}, {
  quote: "Hmm? I see you have no mustache. Poor, bald, little creature. It's not a fair fight for you, but luckily, I'm not a fair fighter. Let's go!",
  name: "-Chief Chilly"
}, {
  quote: "I'm the Big Bob-omb, baron of all blasting matter, king of ka-booms worldwide! You've got some nerve making it this far. Despite your looks, you seem to be quite brave. I commend you. Nevertheless, the Power Star is a precious item from King Bowser. I will not give it to you. If you want it, you must defeat me.",
  name: "-King Bob-omb"
}, {
  quote: "Heh heh heh... We are ghosts -- we'll always come back to haunt you... Until we meet again... ...heh heh heh....",
  name: "-King Boo"
}, {
  quote: "Whoa, pal, you aren't trying to cheat, are you? Shortcuts aren't allowed. Now, I know that you know better. You're disqualified! Next time, play fair!",
  name: "-Big Penguin"
}, {
  quote: "Yahoooo!",
  name: "-Mario"
}, {
  quote: "Okey dokey!",
  name: "-Mario"
}, {
  quote: "Let's-a go!",
  name: "-Mario"
}, {
  quote: "I'm-a tired...",
  name: "-Mario"
}, {
  quote: "Press start to play!",
  name: "-Mario"
}, {
  quote: "Mario! The power of the Stars is restored to the castle...and it's all thanks to you! Thank you, Mario! We have to do something special for you...",
  name: "-Princess Peach"
}, {
  quote: "Nighty nighty. Ah spaghetti. Ah, ravioli. Ahh, mama mia.",
  name: "-Mario"
}];

$(document).ready(function() {

  //Let's randomize our quotes so it will add a bit of replay value to our site - getting the same quotes in the same order each time is boooooring!
  
  $('#quote-btn').click(function() {
    var quotesLength = quotes.length;
    var rand = Math.floor(Math.random() * quotesLength);
    $("#quote").text(quotes[rand].quote);
    $("#author").text(quotes[rand].name);
  });
  
//Let's make a button to share the quote which is displayed!
  
  $('#tweet-btn').click(function() {
    window.open('https://twitter.com/intent/tweet?text=' + $('#quote').text() + " " + $('#author').text());
  });

});