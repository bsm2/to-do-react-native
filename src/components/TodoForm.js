import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "../styles";
import { addTodo } from "../store/todoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

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
      dispatch(addTodo(newTodo));
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
