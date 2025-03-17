/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
let coins = 12;
let hasSword = false;
let hasCompass = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");

  console.log("You see a figure on the road. It's a bandit!");
  const choice = readline.question("Do you 'fight' the bandit or 'hide' before he notices you?");

  if (choice === "fight" && hasSword) {
    console.log("You fight off the bandit and continue your journey.");
  } else if (choice === "fight" && !hasSword) {
    console.log("You lose the fight. The bandit steals your coins.");
    coins = 0;
  } else {
    console.log("You hide in bushes and the bandit doesn't see you.");
  }

} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");

  console.log("In the village you meet a merchant who sells swords(10 coins) and a compass(10 coins).");
  const choice = readline.question("Do you want to buy a 'sword', 'compass' or 'nothing'?");
  if ((choice === 'sword' || choice === 'compass') && coins < 10) {
    console.log("You don't have enough coins.");
  } else if (choice === 'sword') {
    console.log("You buy a sword");
    hasSword = true;
    coins -= 10;
  } else if (choice === 'compass') {
    console.log("You buy a compass");
    hasCompass = true;
    coins -= 10;
  } 

} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/