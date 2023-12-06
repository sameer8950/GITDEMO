const accountId = 1234
let accountEmail = "sameer@gmail.com"
 var accountPassword = "12345"
accountCity = "bhiwani"
let accountState;

// accountId = 2 //not allowed

accountEmail = "sam@gmail.com"
accountPassword = "121212"
accountCity = "hisar"

console.log(accountId);


/* 
prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])