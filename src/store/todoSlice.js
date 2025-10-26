import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadTodos = createAsyncThunk("todos/load", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = await AsyncStorage.getItem("TODOS");
  return data ? JSON.parse(data) : [];
});

const saveTodos = async (todos) => {
  await AsyncStorage.setItem("TODOS", JSON.stringify(todos));
};

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
      saveTodos(state.items);
    },
    deleteTodo: (state, action) => {
      console.log("Deleting todo with id:", action.payload);
      state.items = state.items.filter((t) => t.id !== action.payload);
      saveTodos(state.items);
    },
    toggleTodo: (state, action) => {
      state.items = state.items.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );
      saveTodos(state.items);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(loadTodos.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
