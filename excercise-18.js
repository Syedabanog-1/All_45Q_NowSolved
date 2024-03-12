"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* 18.	Seeing the World: Think of at least five places in the world
you’d like to visit.
• Store the locations in a array. Make sure the array is not in
alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual
 list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the
 order of the original list.
• Show that your array is still in its original order by printing it
 again.
• Reverse the order of your list. Print the array to show that its
order has changed.
• Reverse the order of your list again. Print the list to show it’s
 back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the
array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical
order. Print the list to show that its order has changed.*/
let places = ['scotland', 'england', 'USA', 'Iran', 'Ireland', 'Australia', 'canada'];
console.log('Origional', places);
console.log('Alphabetically Order', [...places].sort()); //Alphabetically Order
console.log('Origional', places);
console.log('Reverse of Alphabetically Order', [...places].sort().reverse()); //Reverse Order
console.log('Reverse Order', places);
console.log('Back to  Alphabetically Order', [...places].sort().reverse()); //back to its origional order
console.log('Alphabetically Order', [...places].sort());
console.log('Origional', places);
