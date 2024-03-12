"use strict";
/* 16.	More Guests: You just found a bigger dinner table,
 so now more space is available. Think of three more guests to
  invite to dinner.
• Start with your program from Exercise 15. Add a print statement to
the end of your program informing people that you found a bigger
 dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to
 add one new guest to the end of your list. • Print a new set of
 invitation messages, one for each person in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ['Amina', 'Khadija', 'Fatima'];
let message = "You're invited to dinner party";
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Miss', guest_list[i], message, '\n\n Our pleasure', '\n\nThank you\n\n');
}
let absent_guest = 'Amina';
let new_guest = 'zainab';
guest_list[0] = new_guest;
for (let ind = 0; ind < guest_list.length; ind++) {
    console.log(`Dear Miss ${guest_list[ind]}: ${message} \n\n Thank you\n\n`);
}
console.log(`Miss ${absent_guest}  is no more joinning us in dinner party`);
console.log(`\n\nGood News! We have big Dinner Table So inviting 3 more guests\n\n`);
let beginingGuest = 'Syeda';
guest_list.unshift(beginingGuest); //add guest at start
let middleGuest = 'Batool';
let middleNumber = (guest_list.length / 2);
guest_list.splice(middleNumber, 0, middleGuest); //add guest at mid point array guest_list
let endGuest = 'Zehra';
guest_list.push(endGuest);
// invitation messages, one for each person in your list.
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Miss', guest_list[i], message, '\n\n  It is our pleasure to inviting you', '\n\nThank you\n\n');
}
