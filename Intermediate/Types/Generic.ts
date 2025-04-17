// What They Mean
// These are conventionally named but can be anything. Here’s what they usually stand for:

//note : you can use anything this is just it commonly used
// Symbol	Meaning         (by convention)
// T	    Type            (general type placeholder)
// U	    Another type    (used for comparisons or constraints)
// K	    Key             (often a key of an object)
// V	    Value
// E	    Element         (for arrays or sets)


//depend on you defined identity to be which type
function identity<T>(arg: T): T {
    return arg;
  }
  
  const a = identity<number>(5); // T is number
  const b = identity("hello");   // T is string (inferred)

//
function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const merged = merge({ name: "Alice" }, { age: 30 });
// T = { name: string }, U = { age: number }

//note : you can use anything this is just it commonly used
//for example
function person<idk , idk2>(first : idk , last :idk2) : string{
    return `${first} ${last}`
}

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  
const usera = { name: "Bob", age: 25 };
const namea = getValue(usera, "name"); // T = typeof user, K = "name"
  