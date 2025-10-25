import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles";

const TodoForm = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = async () => {
    if (!title.trim()) {
      Alert.alert("Validation", "Please enter a title for your todo.");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      completed: false,
    };

    try {
      const storedTodos = await AsyncStorage.getItem("TODOS");
      const todos = storedTodos ? JSON.parse(storedTodos) : [];
      const updatedTodos = [...todos, newTodo];
      await AsyncStorage.setItem("TODOS", JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error saving todo:", error);
      Alert.alert("Error", "Failed to save todo. Please try again.");
    }
  };

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo..."
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Add a description..."
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity style={styles.submitBtn} onPress={submit}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.dividerLine} />
    </>
  );
};

export default TodoForm;
