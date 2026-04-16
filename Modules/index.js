import { add } from "./calc";

add
document.querySelectorAll("#calcSection > button").forEach(button => {
    button.addEventListener("click", function (event) {
        const operation = event.target.textContent;

        const firstNum = parseFloat(document.getElementById("firstNum").value);
        const secondNum = parseFloat(document.getElementById("secondNum").value);
        const output = document.getElementById("output");

        switch (operation) {
            case '+':
                output.value = add(firstNum, secondNum);
                break;
            case '-':
                output.value = subtract(firstNum, secondNum);
                break;
            case '*':
                output.value = multiply(firstNum, secondNum);
                break;
            case '/':
                output.value = divide(firstNum, secondNum);
                break;

        }
    })
});