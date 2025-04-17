// Type annotations: string, number, boolean, any, void, unknown, never
var user = "SAM";
var age = 16;
var isAdmin = false;
var data = "any type";
data = 12;
data = true;
//void use in function that don't return value
function logMessage(Message) {
    console.log(Message);
}
//unknown Safer alternative to any. You must narrow its type before using it.
var input = "hello";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
//never Used for functions that never return (e.g., they throw errors or have infinite loops).  , Useful in exhaustive type checks (e.g., in switch statements).
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
}
//# sourceMappingURL=Type.js.map