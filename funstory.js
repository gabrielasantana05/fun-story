let name = prompt("Main character's name:");
let friend = prompt("Friend's name:");
let town = prompt("Town name:");
let snack = prompt("Favorite snack:");
let drink = prompt("Favorite drink:");
let place = prompt("Summer place:");
let activity = prompt("Fun activity:");
let pet = prompt("Type of pet:");
let petName = prompt("Pet's name:");
let weather = prompt("Summer weather:");
let object = prompt("Something they find:");
let vehicle = prompt("Something they ride:");
let music = prompt("Type of music:");
let color = prompt("Favorite color:");
let time = prompt("Time of day:");

let story =
"It was a " + weather + " summer afternoon in " + town + ". " +

"At around " + time + ", " + name +
" met up with their friend " + friend +
" at the " + place + ". " +

name + " brought their " + pet +
" named " + petName +
", who followed them everywhere. " +

"While listening to " + music +
" music, they shared some " + snack +
" and drank cold " + drink + ". " 

"Later, they rode around on a " + color +
" " + vehicle +
" and spent hours doing " + activity + ". " +

"Near the end of the day, they discovered a strange " +
object + " hidden by the sidewalk. " +


"As the sun began to set, " + name +
", " + friend +
", and " + petName +
" walked home feeling happy and tired after a perfect summer afternoon.";

alert(story);
