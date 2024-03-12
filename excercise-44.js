/* 44.	Sandwiches: Write a function that accepts a array of items a
person wants on a sandwich. The function should have one parameter
that collects as many items as the function call provides, and it
should print a summary of the sandwich that is being ordered. Call
 the function three times, using a different number of arguments
 each time.*/
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\tSandwich Summary");
    if (items.length === 0) {
        console.log("    \n\tYou ordered no sandwich. please add some items.\t\n");
    }
    else {
        items.forEach(function (item, i) {
            console.log("     (".concat(i + 1, ")  ").concat(item));
        });
    }
    console.log("\n");
}
// call function with different number of arguments each time
makeSandwich();
makeSandwich('Pakistan', 'Irani', 'Italian', 'Indonasian');
makeSandwich('butter', 'honey');
makeSandwich('onion', 'cucumber', 'gabbage');
