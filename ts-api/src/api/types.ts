//all shared TypeScript types and interfaces
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
}

/*
DISCRIMINATED UNION
Handles success/error states
*/

export type ApiResponse<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };

/*
CONDITIONAL TYPE
Dynamic return types
*/

export type DynamicResult<T> =
  T extends string
    ? string[]
    : T extends number
    ? number[]
    : T[];

/*
UTILITY TYPE EXAMPLES
*/

export type PartialUser = Partial<User>;

export type UserPreview = Pick<User, "id" | "name">;

export type UserWithoutEmail = Omit<User, "email">;

export type UserRecord = Record<string, User>;