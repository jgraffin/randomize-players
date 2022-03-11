import { configureStore, Store } from "@reduxjs/toolkit";

import usersReducer from "../features/users/usersSlice";

const UsersStore: Store = configureStore({
  reducer: {
    users: usersReducer,
  },
} as any);

export type RootState = ReturnType<typeof UsersStore.getState>;

export default UsersStore;
