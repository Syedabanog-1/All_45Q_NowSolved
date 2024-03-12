/* Colors #1: Imagine an alien was just shot down in a game. Create
 a variable called alien_color and assign it a value of 'green', 
 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green.
 If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and 
another that fails. (The version that fails will have no output.)*/

let alien_colorArray: string [] = ['green','yellow','red'];
 
//output version 1
let alien_color = 'green';
    
        console.log(`\n\t version 1\t\n \nAlien Color is ${alien_color} : player just earned 5 points.`);
 
 //output version 2
  alien_color = 'yellow';

if(alien_color == 'green'){
   console.log(`Alien Color is ${alien_color} : player just earned 5 points.`);
   
} else{
   console.log(`\n\tversion 2\t\n \nAlien Color is ${alien_color} : player just earned 10 points.`);
}
