import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";
import TodoItem from "./TodoItem";

const Todos = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <View style={styles.todosContainer}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Todos;
