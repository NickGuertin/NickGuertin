var contactArray = ["Life's a garden, dig it", "Nick Guertin", "1280 Market Street, apt 405", "i am 26 years old"]
for (x = 0; x < contactArray.length; x++){
  $("#contact-list").append("<li>" + contactArray[x] + "</li>");
}


var contactArray = {
  "quote": "life's a garden, dig it",
  "name": "Nick Guertin",
  "address": "1280 Market Street",
  "age": "I am 26 years old"
}
