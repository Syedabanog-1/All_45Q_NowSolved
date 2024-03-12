/* Favourite Fruit: Make a array of your favorite fruits, and then
 write a series of independent if statements that check for certain
  fruits in your array.
• Make a array of your three favorite fruits and call it
 favorite_fruits.
• Write five if statements. Each should check whether a certain kind
 of fruit is in your array. If the fruit is in your array, the if
  block should print a statement, such as You really like bananas!*/

  let favourite_Fruits: string[] = ['strawbery','cherry','Mango'];
  
  if (favourite_Fruits.includes('apple')) {
    console.log('Apple keeps us healthy i love it');
  } if (favourite_Fruits.includes('banana')) {
    console.log('I like Banana  it gives us energy');
  }if (favourite_Fruits.includes('Mango')) {
    console.log('I like Mango its delicious');
  }if (favourite_Fruits.includes('cherry')) {
    console.log('Cherry is very yummy jusicy');
  } if (favourite_Fruits.includes('strawbery')) {
    console.log('Strawbery is so nice full of vitamins');
  }