let userNumber;

do {

    let userInput = prompt("Please enter a number from 1 to 10:");

    if (userInput === null || userInput === undefined || userInput === '') {
        console.log("Number cannot be blank!");
    } else {
        userNumber = parseInt(userInput, 10);

        if (isNaN(userNumber)) {
            console.log("Error: Not A Number!");
        } else {
            console.log("NUM:", userNumber);

        }

    }
} while (isNaN(userNumber));

debugger
for (let index = 0; index < 10; index++) {
    if (index % 3 === 0){
        continue;
    }

    console.log("NUM:", index);


}

let a;

if (num % 2 === 0) a = "EVEN";
else a = "ODD";

let b = 
num % 2 === 0 ? 
"EVEN" 
: 
"ODD";