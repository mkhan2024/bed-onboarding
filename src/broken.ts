const forceError: number = "not a number"; // type mismatch (should trigger lint/ts)
const unusedVariable = 42; // This variable is declared but not used

export function greet(name) {
    debugger; // should trigger eslint rule no-debugger
    const message = "Hello, " + name;
    console.log(message);
    return message;
} // Missing explicit return type and parameter type

class Greeter {
    message;
    constructor(msg) {
        this.message = msg;
    } // Missing property type declaration and parameter type
}
debugger; // Intentional violation to force Reviewdog feedback