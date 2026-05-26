// contains custom utility types and transformation functions.
import { User } from "./types.js";

/*
CUSTOM UTILITY TYPE
Transforms all properties into strings
*/

export type Stringify<T> = {
  [K in keyof T]: string;
};

/*
TRANSFORM USER DATA
*/

export function stringifyUser(
  user: User
): Stringify<User> {
  return {
    id: String(user.id),
    name: user.name,
    email: user.email,
  };
}