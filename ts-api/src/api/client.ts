/* core API wrapper.

contains the generic fetchData<T>() function that:

sends HTTP requests,
handles errors,
and returns strongly typed responses.*/

import { ApiResponse } from "./types.js";

/*
GENERIC FETCH FUNCTION
*/

export async function fetchData<T>(
  url: string
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP Error: ${response.status}`,
      };
    }

    const data: T = await response.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: "Network request failed",
    };
  }
}