import { View, FlatList } from "react-native";
import { styles } from "../styles";
import TodoItem from "./TodoItem";
import { styles } from './../../src copy/styles';

const Todos = ({ todos }) => {
  return (
    <View style={styles.todosContainer}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Todos;
