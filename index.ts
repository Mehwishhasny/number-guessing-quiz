#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber : number = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {message: "Please guess a number between 1-6:", type: "number", name: "userGuessedNum"}
]);

if(answers.userGuessedNum === randomNumber){
    console.log("Congratulations! Your guess is right.");
}

else{
    console.log("Oops! Your guess is too low. Please try again.");
}