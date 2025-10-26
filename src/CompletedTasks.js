import { styles } from "./CompletedTasks.styles";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";

const CompletedTasks = () => {
  const { items: todos, loading } = useSelector((state) => state.todos);

  const completedTodos = todos.filter((todo) => todo.completed);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1976D2" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Completed Tasks</Text>

      {completedTodos.length > 0 ? (
        <FlatList
          data={completedTodos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <Text style={styles.title}>{item.title}</Text>
              {item.description ? (
                <Text style={styles.description}>{item.description}</Text>
              ) : null}
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyText}>No completed tasks yet.</Text>
      )}
    </View>
  );
};

export default CompletedTasks;