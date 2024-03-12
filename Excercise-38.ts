/* 38.	Cities: Write a function called describe_city() that accepts
 the name of a city and its country. The function should print a 
 simple sentence, such as Karachi is in Pakistan. Give the parameter 
 for the country a default value. Call your function for three 
 different cities, at least one of which is not in the default
 country.*/

 function describe_City( City: string ='Karachi:' , Country: string = 'Pakistan'): void 
  {
    return console.log(`city: ${City}, Country: ${Country}`);

}

// Call the Function with default city and country
describe_City();
// call function for different city

describe_City('Lahore:');
// call the function for different city and country
describe_City('London:','London is adorable city for tourist');