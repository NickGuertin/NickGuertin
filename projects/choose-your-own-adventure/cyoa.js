alert("Hello, welcome to my Choose Your Own Adventure game. In this game you will be battling John for the title of Hot Dog Eating World Champion. Choose you answers wisely.")

var response = prompt("You walk into Tech Town and John boldly challenges you to a hotdog eating contest. Do you except?");

if(response === "yes"){
    response = prompt("John begins to annihilate his dogs. Are you intimidated?");
} else if (response === "no") {
    response = prompt("What, you got church in the morning or something?");
} if(response === "yes"){
  response = alert("If you scared go to church");
} else if(response === "no"){
  response = prompt("Ahhh finally a worthy challenger! Can you prove yourself?");
} if(response === "yes"){
  response = prompt("John begins to choke, do you preform the heimlich maneuver?");
} else if(response === "no"){
  response = prompt("Child's play, your no match for the master.");
} if(response === "yes"){
  response = alert("You just saved the life of a true coding gangster. Thank you for playing the game.");
} else if(response === "no"){
  response = alert("I don't blame you, the guy didn't even like Nickleback.");
}
 else {
    alert("M8, c'mon I'm tryna learn here.");
} 
