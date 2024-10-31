// ASSIGNMENT.
// create a file that contains an object of your bio-data. Use your data in a different file to create any thing you like.

import {bioData} from "./export.js"

// console.log(bioData);

let userName =  bioData.userName;
let userAge = bioData.age;
let userCountry = bioData.country;
let userEmail = bioData.email

import { dataBits } from "./export.js";

console.log(dataBits())

if (userName === "Ash") {
  console.log("Hello Wisdom");
  } else {
    console.log("Hello World");
  }

if(userAge > 18){
  console.log("You are Underage")
}else{
  console.log("You are an Adult")
}

if (userCountry !== "England") {
  console.log("You are eligible for the Afican Based Scholarship");
}else{
  console.log("You are not eligible");
}

if (userEmail) {
  console.log("Your email is: ", userEmail);  
} else {
  console.log("Your email is not provided");
}
