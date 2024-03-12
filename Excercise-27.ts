/*
  Alien Colors #3: Turn your if-else chain from Exercise 5-4 into
 an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is
 printed for the appropriate color alien*/

 let alien_colorArray: string [] = ['green','yellow','red'];

 //version 1
 let alien_Color ='green';
 console.log("\n\tversion 1\t\n \nAlien Color is green : player just earned 5 points for shooting the alien");
 //Version 2
 alien_Color = 'yellow';
 console.log("\n\tversion 2\t\n \nAlien Color is yellow : player just earned 10 points for shooting the alien");
 //Version 3
  alien_Color = 'red';
 
 if(alien_Color == 'green'){
    console.log("\n\tversion 2\t\n \nAlien Color is : player just earned 5 points for shooting the alien");
 }
  else if (alien_Color == 'yellow') {
    console.log("\n\tversion 2\t\n \nAlien Color is yellow : player just earned 10 points for shooting the alien");
 } else if (alien_Color == 'red'){
  console.log("\n\tversion 3\t\n \nAlien Color is red : player just earned 15 points for shooting the alien");
 } else {
  console.log('Alien color is unknown');

 }