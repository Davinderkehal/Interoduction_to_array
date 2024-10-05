//console.log("test");

//Create an array;


let x = 1;
if (x > 10) {
    console.log('x is greater than 10');
} else if (x < 15) {
    console.log('x is not greater than 15');
}

 else if (x == 1) {
  console.log('x is equal to 1');
 }

 var grade = 'A';

switch (grade) {
    case 'A':
        console.log('Excellent');
        break;
    case 'B':
        console.log('Good');
        break;
    case 'C':
        console.log('Fair');
        break;
    case 'D':
        console.log('Poor');
        break;
    case 'F':
        console.log('Failing');
        break;
    default:
        console.log('Unknown grade');
}

myCustomLabel : {
    for (var i = 0; i < 7; i++) {
      if (i === 7) {
        break myCustomLabel ; // Exits the loop as well as the myCustomLabel  block when i is 7
      }
      console.log(i);
    }
}


var age = 15; 

while (age < 18) {
    console.log("You are " + age + ". You cannot vote in Canada");
    age++; //Add 1 to the 'age' in each round.
}

console.log(" Congratulation! You are now 18 or older and You are elgible to cast your vote in Canada!");


var teamPlayers = 11;

do {
    console.log(" How many playing needed: " + (teamPlayers -1 ));
    teamPlayers--;
} while (teamPlayers -- ); // Two player got each cycle

console.log("No more players for now.");

for (var i = 1; i <= 31; i++) {
    console.log("Day " + i + " of the month");
}
console.log("This is the first day of month");

var person = {firstName: "Davinder", lastName: "kehal", age: 54};

for (var key in person) {
    console.log(key + ": " + person[key]);

}