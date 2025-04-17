//Type Interface define the shape of an object
interface User {
  first: string;
  last: string;
  age: number;
  buy: string[];
  isAdmin?: boolean; //optional
}
const sam: User = {
  first: "SAM",
  last: "DE",
  age: 15,
  buy: ["laptop", "phone", "mouse"],
};

//Interface Extension (Inheritance)
interface Person {
  name: string;
}
interface Employee extends Person {
  employeeId: number;
}

const emp: Employee = {
  name: "John",
  employeeId: 1234,
};
