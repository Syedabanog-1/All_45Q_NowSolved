/*45.	Cars: Write a function that stores information about a car in
 a Object. The function should always receive a manufacturer and a
  model name. It should then accept an arbitrary number of keyword
  arguments. Call the function with the required information and two
   other name-value pairs, such as a color or an optional feature.
    Print the Object that’s returned to make sure all the information
     was stored correctly.*/
function createCar(manufacturer, model) {
    var properties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        properties[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: 'Alto',
        model: '2023',
        color: 'blue',
        Optional_Features: 'hiroof',
        speed: '240 km/hr'
    };
    for (var _a = 0, properties_1 = properties; _a < properties_1.length; _a++) {
        var _b = properties_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var myCar = createCar('Tyota', 'Corrola', ['color', 'black'], ['Optional_Features', 'sunroof'], ['speed', '180 KM/hour']);
console.log(myCar);
