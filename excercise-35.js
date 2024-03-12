/* 35.	Animals: Think of at least three different animals that have a
 common characteristic. Store the names of these animals in a list,
 and then use a for loop to print out the name of each animal.
 • Modify your program to print a statement about each animal, such as
  A dog would make a great pet. • Add a line at the end of your
  program stating what these animals have in common. You could print a
  sentence such as Any of these animals would make a great pet!*/
var pet_animals = ['goat', 'sheep', 'cow', 'camel'];
var petanimal = pet_animals.length;
console.log(" \tMy Favourite Animals are:\t");
for (petanimal = 0; petanimal < pet_animals.length; petanimal++) {
    console.log("\n\t (".concat(petanimal, ") ").concat(pet_animals[petanimal], "\t\n"));
    if (pet_animals[petanimal] === 'goat') {
        console.log("\n\t It looks so innocent i love goat\t");
    }
    else if (pet_animals[petanimal] === 'sheep') {
        console.log("\n\tWe acquire wool from Sheep\t");
    }
    else if (pet_animals[petanimal] === 'cow') {
        console.log("\n\t we get milk  which is enegetic for us:\t");
    }
    else if (pet_animals[petanimal] === 'camel') {
        console.log("\n\tI like riding on camel\n\t");
    }
}
console.log("\t\t All these Animals are very useful for human and  would be great pet!\t\t");
