/* 26.	Alien Colors #2: Choose a color for an alien as you did in
 Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player 
just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player 
just earned 10 points.
• Write one version of this program that runs the if block and another
 that runs the else block.*/

 let alien_colorArray: string [] = ['green','yellow','red'];
 
//output version 1
let alien_color = 'green';
    
        console.log(`\n\t version 1\t\n \nAlien Color is ${alien_color} : player just earned 5 points for shooting the alien`);
 
 //output version 2
   alien_color = 'yellow';

if(alien_color == 'green'){
   console.log(`\n\tversion 2\t\n \nAlien Color is ${alien_color} : player just earned 5 points for shooting the alien`);
}
 else if (alien_color !=='green') {
   console.log(`\n\tversion 2\t\n \nAlien Color is ${alien_color} : player just earned 10 points for shooting the alien`);
}  
