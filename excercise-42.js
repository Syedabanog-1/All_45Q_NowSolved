/*42.	Great Magicians: Start with a copy of your program from
Exercise 39. Write a function called make_great() that modifies the
 array of magicians by adding the phrase the Great to each magician’s
 name. Call show_magicians() to see that the list has actually been
modified.*/
var magicianNames = ['Irfan', 'mansoor', 'rizwan', 'kamran', 'aslam'];
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    var greatMagicians = magicians.map(function (magician) { return " The Great ".concat(magician); });
    return greatMagicians;
}
// modify array to add "The Great" to each magicians name
var greatMagicianNames = makeGreat(magicianNames);
showMagicians(greatMagicianNames);
// call the function to show origional magician's names
console.log("\n\tOrigional Magicians\t\n");
showMagicians(magicianNames);
// call the function to show great magician's names
console.log("\n\tGreat Magicians\t\n");
showMagicians(greatMagicianNames);
