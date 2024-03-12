/* 41.	Magicians: Make a array of magician’s names. Pass the array
 to a function called show_magicians(), which prints the name of each
  magician in the array.*/
var magicianNames = ['Irfan', 'mansoor', 'rizwan', 'kamran', 'aslam'];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMgicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMgicians;
}
// modify the array to add "the great" to each magician's name
var greatMagiciansNames = make_great(magicianNames);
// call the function to show origional magician's names
show_magicians(magicianNames);
show_magicians(greatMagiciansNames);
