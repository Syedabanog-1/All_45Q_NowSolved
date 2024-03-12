/* 37.	Large Shirts: Modify the make_shirt() function so that shirts
 are large by default with a message that reads I love TypeScript. 
 Make a large shirt and a medium shirt with the default message, and a 
 shirt of any size with a different message.*/

 function makeShirt(size: string ='large:' ,
  message: string ='I Love Typescript'): void
  {
      return console.log(` size: ${size}, message: ${message}`);
  }
  // call the function
  makeShirt();
  //call funtion for size medium
  makeShirt("medium:");
// call function for small size
makeShirt('small:'," Typescript Insights");