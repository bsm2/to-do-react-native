import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "../Router/Router";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

const TodoItem = ({ todo, deleteTodo, completeTodo }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        padding: 10,
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 5,
        borderColor: "#aeaeae",
        flexDirection: "row",
      }}
    >
      <Text
        onPress={() => navigate(PATHS.TODO_DETAILS, { todo: todo })}
        style={{ fontSize: 17, fontWeight: "semibold", flex: 1 }}
      >
        {todo.title}
      </Text>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <FontAwesome5 name="trash" size={18} color="red" onPress={() => deleteTodo(todo.id)} />
        <AntDesign name="check-circle" size={18} color="green" onPress={() => completeTodo(todo.id)}/>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
