type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<string>; // "Yes"
type B = IsString<number>; // "No"

type ResponseAPI<T> = T extends Error ? { error: true; message: string } : { data: T };

type resA = ResponseAPI<string>; // { data: string }
type ResB = ResponseAPI<Error>;  // { error: true; message: string }

