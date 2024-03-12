/* 36.	T-Shirt: Write a function called make_shirt() that accepts a
 size and the text of a message that should be printed on the shirt. 
 The function should print a sentence summarizing the size of the  
 shirt and the message printed on it. Call the function.*/



 const make_shirt = (size: string , message: string) : 
 void =>
 {
     console.log(`size: ${size}, message: ${message}`);
 }

 //call function with size and message vat\riable
 
 let size: string ='medium';
 let message: string = "Typescript in VS Code Editor";

 make_shirt(size, message);
 //directly call the function
 make_shirt('large', 'Typescript Online');