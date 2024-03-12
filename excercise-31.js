/* 31.	No Users: Add an if test to Exercise 28 to make sure the list
 of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the
correct message is printed.*/
var userNames = ['admin', 'sania', 'Btool', 'Mubarka', 'mryum', 'Farah', 'Sanober'];
function greetUsers(userNames) {
    if (userNames.length == 0) {
        console.log('We need to find some more users');
        return;
    }
    for (var userN in userNames) {
        if (userNames[userN] === 'admin') {
            console.log('Hello admin, would you like to see a status report');
        }
        else {
            console.log("Hello ".concat(userNames[userN], " , thank you for logging in again"));
        }
    }
}
console.log('Non empty users list');
greetUsers(userNames);
userNames = []; // to empty users list
console.log('Empty users list');
greetUsers(userNames);
