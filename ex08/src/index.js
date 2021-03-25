const_ = require("lodash");
// Only change below this line
// Users nested array with four objects stars here
var users = [
    { firstName: "John", lastName: "Doe", age: 24, gender: "male" },
    { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];
// Users nested array with four objects ends here
// getUsers function-lists of users starts here
function getUsers() {
    var output = "";
    for (var i = 0; i < users.length; i++) {
        output += users[i].firstName + " " + users[i].lastName + " is " + users[i].age + ", " + users[i].gender +"\n"

    }
    console.log(output);
    return output;

}
//get users function -list of users ends here
//findUsers(lastName, gender) function starts here

function findUser(lastName, gender) {
    try {
        var user = _.find(users, function(lodashUser)
            { return lastName == lodashUser.lastName && gender == lodashUser.gender; }, 0
        );
        
        var iFindUser = user.firstName + " " + user.lastName + " is " + user.age + ", " + user.gender; //add appropriate code here
        console.log(iFindUser);
        return iFindUser;
    } catch (error) {
        console.log("Cannot read property 'firstName' of underfined");
        return ("Cannot read property 'firstName' of underfined"); //change this line
    };
}
    //findUsers ends here

    getUsers();

    findUser("Doe","male"); //change this line
    module.exports = findUser;