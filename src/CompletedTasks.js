import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CompletedTasks = () => {
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    const fetchCompletedTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem("TODOS");
        if (storedTodos) {
          const parsedTodos = JSON.parse(storedTodos);
          const completed = parsedTodos.filter((todo) => todo.completed);
          setCompletedTodos(completed);
        }
      } catch (error) {
        console.error("Error loading completed todos:", error);
      }
    };

    fetchCompletedTodos();

    const focusHandler = () => fetchCompletedTodos();
    const interval = setInterval(focusHandler, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text style={styles.title}>{item.title}</Text>
      {item.description ? (
        <Text style={styles.description}>{item.description}</Text>
      ) : null}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Completed Tasks</Text>

      {completedTodos.length > 0 ? (
        <FlatList
          data={completedTodos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.emptyText}>No completed tasks yet.</Text>
      )}
    </View>
  );
};

export default CompletedTasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FAFAFA",
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1976D2",
    marginBottom: 15,
  },
  todoItem: {
    backgroundColor: "#E3F2FD",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#1976D2",
  },
  title: {
    fontSize: 18,
    color: "#0D47A1",
    textDecorationLine: "line-through",
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 40,
  },
});
