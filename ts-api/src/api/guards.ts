// type guards used for runtime validation.
import { User, Post } from "./types.ts";

/*
TYPE GUARD FOR USER
*/

export function isUser(data: any): data is User {
  return (
    typeof data === "object" &&
    typeof data.id === "number" &&
    typeof data.name === "string" &&
    typeof data.email === "string"
  );
}

/*
TYPE GUARD FOR POST
*/

export function isPost(data: any): data is Post {
  return (
    typeof data === "object" &&
    typeof data.id === "number" &&
    typeof data.title === "string" &&
    typeof data.body === "string"
  );
}