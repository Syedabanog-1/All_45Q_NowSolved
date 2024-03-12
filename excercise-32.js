/* 32.	Checking Usernames: Do the following to create a program that
 simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one
 or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has
already been used. If it has, print a message that the person will
need to enter a new username. If a username has not been used, print
 a messletage saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been
 used, 'JOHN' should not be accepted.*/
var current_Users = ['Tayyaba', 'Fatima', 'Malaika', 'Ayma', 'Shams', 'Pakiza', 'tahira'];
var new_Users = ['Chandni', 'tayyaba', 'sunaira', 'Ayma', 'malaika', 'farah', 'roshni'];
new_Users.forEach(function (newUsers) {
    var new_UsersL = newUsers.toLowerCase();
    //some methode to match current and new users
    var currentUsersL = current_Users.some(function (currentUsers) { return currentUsers.toLowerCase() === new_UsersL.toLowerCase(); }); //true/false
    // apply condition
    if (new_UsersL) {
        console.log(" ".concat(currentUsersL, ":  ").concat(newUsers, " "));
    }
    else {
        console.log(" ".concat(currentUsersL, ": ").concat(newUsers, "  "));
    }
});
