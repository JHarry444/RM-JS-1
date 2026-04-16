// modules can export variables and function
// these can be imported into specific files


export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;

const calc = (a, b, operator) => eval(`${a} ${operator} ${b}`);
export default calc;