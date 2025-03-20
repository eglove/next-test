import { queryOptions } from "@tanstack/react-query";
import { users } from "@/database/users";

export const queryKeys = {
  getUsers: () => ["users"],
};

export const queries = {
  getUsers: () => {
    return queryOptions({
      queryKey: queryKeys.getUsers(),
      queryFn: () => {
        return users();
      },
    });
  },
};
