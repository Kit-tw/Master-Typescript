//Partial<T> Makes all properties optional
interface User {
    name: string;
    age: number;
  }
  
  const updateUser = (user: Partial<User>) => {
    // you can pass only part of the object
    return { ...user };
  };
  
  updateUser({ name: "Alice" });


//Required<T> Makes all properties required
interface UserUtility {
    name?: string;
    age?: number;
  }
  
  const userReq: Required<UserUtility> = {
    name: "Alice",
    age: 30,
  };
  
//   Readonly<T> Makes all properties read-only
const userRea: Readonly<UserUtility> = {
    name: "Bob",
    age: 25,
  };
  // user.name = "Changed"; // Error

  //Pick<T, K> Creates a type by picking specific keys from a type
type NameOnly = Pick<UserUtility, "name">;
type AgeOnly = Pick<UserUtility , "age">;
const personPick: NameOnly = {
  name: "John",
};

// Omit<T, K> Creates a type by removing specific keys from a type
type WithoutAge = Omit<UserUtility, "age">;
const personOmit: WithoutAge = {
  name: "Sara",
};


//Record<K, T> Creates an object type with keys K and values of type T
type RoleUtility = "admin" | "user" | "guest";

const permissions: Record<RoleUtility, string[]> = {
  admin: ["read", "write"],
  user: ["read"],
  guest: [],
};

//Exclude<T, U> Excludes from T types that are assignable to U
type StatusUtility = "success" | "error" | "pending";
type NotPending = Exclude<StatusUtility, "pending">; // "success" | "error"

// Extract<T, U> Extracts from T types that are assignable to U
type OnlyPending = Extract<Status, "pending" | "loading">; // "pending"


//onNullable<T> Removes null and undefined from a type.
type MaybeName = string | null | undefined;
type Name = NonNullable<MaybeName>; // string

