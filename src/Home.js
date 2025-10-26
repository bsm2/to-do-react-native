import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos } from "./store/todoSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { items: todos, loading } = useSelector((state) => state.todos);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const renderHeader = () => (
    <View>
      <TodoForm />
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterBtn, filter === "all" && styles.activeFilterBtn]}
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
    </View>
  );

  return (
    <FlatList
      data={filteredTodos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <TodoItem todo={item} />}
      ListHeaderComponent={renderHeader}
      contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
      keyboardShouldPersistTaps="handled"
      ListEmptyComponent={
        loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 150,
            }}
          >
            <ActivityIndicator size="large" color="#1976D2" />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 100,
            }}
          >
            <Text style={{ color: "#666" }}>No todos found</Text>
          </View>
        )
      }
    />
  );
};

export default Home;
