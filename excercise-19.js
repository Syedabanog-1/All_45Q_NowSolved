"use strict";
/* 19.	Dinner Guests: Working with one of the programs from
 Exercises 14 through 18, print a message indicating the number
 of people you are inviting to dinner*/
Object.defineProperty(exports, "__esModule", { value: true });
// import {guest_list} from "./Excercise-14";
let guest_list = ['Amina', 'Khadija', 'Fatima'];
let message = "You're invited to dinner";
//  console.log(guest_list, "These all Invited to dinner");
for (let i = 0; i < guest_list.length; i++) {
    console.log(`${i + 1}. ${guest_list[i]}: ${message}`);
}
