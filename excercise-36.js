/* 36.	T-Shirt: Write a function called make_shirt() that accepts a
 size and the text of a message that should be printed on the shirt.
 The function should print a sentence summarizing the size of the
 shirt and the message printed on it. Call the function.*/
var make_shirt = function (size, message) {
    console.log("size: ".concat(size, ", message: ").concat(message));
};
//call function with size and message vat\riable
var size = 'medium';
var message = "Typescript in VS Code Editor";
make_shirt(size, message);
//directly call the function
make_shirt('large', 'Typescript Online');
