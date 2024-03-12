/* 19.	Dinner Guests: Working with one of the programs from
 Exercises 14 through 18, print a message indicating the number 
 of people you are inviting to dinner*/
 

// import {guest_list} from "./Excercise-14";




let guest_list: string [] =['Amina','Khadija','Fatima'];
  let message: string ="You're invited to dinner";
//  console.log(guest_list, "These all Invited to dinner");
  for(let i=0; i<guest_list.length; i++){
    console.log(`${i+1}. ${guest_list[i]}: ${message}`);
  }