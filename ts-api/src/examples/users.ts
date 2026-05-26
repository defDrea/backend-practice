// fetches user data from an API,
// validates data using type guards,
// handles success/error states,
// and transforms the response data.
import { fetchData } from "../api/client.js";
import { User } from "../api/types.js";
import { isUser } from "../api/guards.js";
import { stringifyUser } from "../api/utils.js";

async function getUsers() {
  const result = await fetchData<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  /*
  DISCRIMINATED UNION CHECK
  */

  if (result.success) {
    console.log("Users fetched successfully");

    const users = result.data;

    /*
    TYPE GUARD VALIDATION
    */

    users.forEach((user) => {
      if (isUser(user)) {
        console.log("Valid user:", user.name);

        /*
        CUSTOM UTILITY TYPE TRANSFORMATION
        */

        const transformedUser = stringifyUser(user);

        console.log(transformedUser);
      }
    });
  } else {
    console.error(result.error);
  }
}

getUsers();