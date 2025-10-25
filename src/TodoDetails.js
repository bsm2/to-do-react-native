import { useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";

const TodoDetails = () => {
  const { params } = useRoute();

  if (!params?.todo)
    return (
      <View>
        <Text>No todo found</Text>
      </View>
    );

  return (
    <View>
      <Text>{params.todo.title}</Text>
      <Text>{params.todo.description}</Text>
    </View>
  );
};

export default TodoDetails;
