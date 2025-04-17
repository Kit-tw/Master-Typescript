// Type annotations: string, number, boolean, any, void, unknown, never
 let user : string = "SAM";
 let age : number = 16;
 let isAdmin : boolean = false;
 
 let data : any = "any type";
 data = 12;
 data = true;

 //void use in function that don't return value
 function logMessage (Message : string) : void {
    console.log(Message);
 }

 //unknown Safer alternative to any. You must narrow its type before using it.
 let input: unknown = "hello";

if (typeof input === "string") {
  console.log(input.toUpperCase());
}

//never Used for functions that never return (e.g., they throw errors or have infinite loops).  , Useful in exhaustive type checks (e.g., in switch statements).
function throwError(message: string): never {
    throw new Error(message);
  }
  
  function infiniteLoop(): never {
    while (true) {}
  }
  
//Array
let userarr : string[] = ["Sam","Denial","John"];
let nums : number[] = [1,2,3,4,5,6];


//Tuples  is an array with fixed length and known types at each index.
let usertuple: [string, number] = ["Alice", 25];

// Enums allow you to define a set of named constants.
enum Role {
    Admin,      // 0
    User,       // 1
    Guest       // 2
  }
  
let userRole: Role = Role.Admin;

enum StatusEnum {
    Success = "SUCCESS",
    Failure = "FAILURE",
    Pending = "PENDING"
  }
  
  let orderStatus: StatusEnum = StatusEnum.Pending;
  
  

