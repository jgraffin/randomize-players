import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type UsersType = {
  id: string;
  name?: string;
  team?: string;
};

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(
    "https://620c58aab5736325938c1678.mockapi.io/api/v1/players"
  );
  console.log(response.data);
  return response.data;
});

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (initialPost) => {
    const response = await axios.post(
      "https://620c58aab5736325938c1678.mockapi.io/api/v1/players",
      initialPost
    );
    return response.data;
  }
) as any;

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    itemUpdated(state: RootState, action: PayloadAction<UsersType>) {
      const { id, name, team } = action.payload;
      const existingUser = state.items.find((item: any) => item.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.team = team;
      }

      axios.put(
        `https://620c58aab5736325938c1678.mockapi.io/api/v1/players/${id}`,
        {
          name,
          team,
        }
      );
    },
    deletePost(state: RootState, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;

      axios.delete(
        `https://620c58aab5736325938c1678.mockapi.io/api/v1/players/${id}`,
        {
          data: {
            id,
          },
        }
      );

      const users = state.items.filter((user: any) => user.id !== id);
      state.items = users;
    },
  },
  extraReducers(builder: any) {
    builder
      .addCase(fetchPosts.pending, (state: RootState, action: any) => {
        state.status = "loading";
      })
      .addCase(
        fetchPosts.fulfilled,
        (state: RootState, action: PayloadAction<string>) => {
          state.status = "succeeded";
          state.items = state.items.concat(action.payload);
        }
      )
      .addCase(fetchPosts.rejected, (state: RootState, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addPost.fulfilled, (state: RootState, action: any) => {
        state.items.push(action.payload);
      });
  },
});

export const { itemUpdated, deletePost } = usersSlice.actions;

export default usersSlice.reducer;

export const selectAllItems = (state: RootState) => state.users.items;
