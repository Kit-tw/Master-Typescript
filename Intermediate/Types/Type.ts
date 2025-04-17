//Union and Intersection types
//Union Types (|) -> allow a variable to be one of several types.
let value: string | number;
value = "Hello";
value = 15;
// value = false; // Error : Type 'boolean' is not assignable to type

type SuccessResponse = {
    status: "success";
    data: string;
  };
  
  type ErrorResponse = {
    status: "error";
    message: string;
  };
  
  type ApiResponse = SuccessResponse | ErrorResponse;
  
  function handleResponse(res: ApiResponse) {
    if (res.status === "success") {
      console.log("Data:", res.data);
    } else {
      console.error("Error:", res.message);
    }
  }
  

// Intersection Types -> allow you to combine multiple types into one. like extends
type Admin = {
  role: string;
};
type user = {
  name: string;
};
type AdminUser = Admin & user;

const superUser: AdminUser = {
  name: "Alice",
  role: "SuperAdmin",
};

//Literal Types -> allow you to specify the exact value a variable can hold, not just the type.
let direction: "left" | "right" | "up" | "down";

direction = "left"; // ✅
direction = "right"; // ✅
// direction = "top";    //  Error: "top" is not assignable

//Use as const to Preserve Literal Types
const theme = "dark"; // type is string (default)
const theme2 = "dark" as const; // type is "dark" (literal)


type Status = "loading" | "success" | "error";
function showStatus(status: Status) {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else {
    console.log("Something went wrong.");
  }
}

//Type Narrowing -> uses to refine a variable’s type within a specific block of code based on checks (like typeof, instanceof, etc.).
///type of
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // id is string here
  } else {
    console.log(id.toFixed(2)); // id is number here
  }
}

//instace of
class Dog {
  bark() {}
}

class Cat {
  meow() {}
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // Dog
  } else {
    animal.meow(); // Cat
  }
}
//in operator — for checking existence of properties
type Admin1 = { role: string };
type User1 = { username: string };

function getUserInfo(person: Admin1 | User1) {
  if ('role' in person) {
    console.log(`Admin role: ${person.role}`);
  } else {
    console.log(`Username: ${person.username}`);
  }
}

