import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); // 👈 added filter state

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const stored = await AsyncStorage.getItem("TODOS");
        if (stored) setTodos(JSON.parse(stored));
      } catch (error) {
        console.error("Error loading todos:", error);
      }
    };
    loadTodos();
  }, []);

  const deleteTodo = async (id) => {
    try {
      setTodos((prev) => {
        const updated = prev.filter((item) => item.id !== id);
        AsyncStorage.setItem("TODOS", JSON.stringify(updated));
        return updated;
      });
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const completeTodo = async (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
    await AsyncStorage.setItem("TODOS", JSON.stringify(updated));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <View style={styles.container}>
      <TodoForm setTodos={setTodos} />

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterBtn,
            filter === "all" && styles.activeFilterBtn,
          ]}
          onPress={() => setFilter("all")}
        >
          <Text
            style={[
              styles.filterText,
              filter === "all" && styles.activeFilterText,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterBtn,
            filter === "active" && styles.activeFilterBtn,
          ]}
          onPress={() => setFilter("active")}
        >
          <Text
            style={[
              styles.filterText,
              filter === "active" && styles.activeFilterText,
            ]}
          >
            Active
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterBtn,
            filter === "completed" && styles.activeFilterBtn,
          ]}
          onPress={() => setFilter("completed")}
        >
          <Text
            style={[
              styles.filterText,
              filter === "completed" && styles.activeFilterText,
            ]}
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      <Todos
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
    </View>
  );
};

export default Home;
