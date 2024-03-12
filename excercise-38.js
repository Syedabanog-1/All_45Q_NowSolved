/* 38.	Cities: Write a function called describe_city() that accepts
 the name of a city and its country. The function should print a
 simple sentence, such as Karachi is in Pakistan. Give the parameter
 for the country a default value. Call your function for three
 different cities, at least one of which is not in the default
 country.*/
function describe_City(City, Country) {
    if (City === void 0) { City = 'Karachi:'; }
    if (Country === void 0) { Country = 'Pakistan'; }
    return console.log("city: ".concat(City, ", Country: ").concat(Country));
}
// Call the Function with default city and country
describe_City();
// call function for different city
describe_City('Lahore:');
// call the function for different city and country
describe_City('London:', 'London is adorable city for tourist');
