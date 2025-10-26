import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const TodoDetails = () => {
  const { params } = useRoute();
  const todo = params?.todo;

  if (!todo) {
    return (
      <View style={styles.container}>
        <Text style={styles.noTodo}>No todo found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.title}</Text>
      <Text style={styles.description}>
        {todo.description || "No description provided."}
      </Text>

      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Status: </Text>
        {todo.completed ? (
          <FontAwesome5 name="check-circle" size={20} color="green" />
        ) : (
          <FontAwesome5 name="circle" size={20} color="#1976D2" />
        )}
      </View>
    </View>
  );
};

export default TodoDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  noTodo: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1976D2",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: "#333",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  statusText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});
