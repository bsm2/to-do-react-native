import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity, Platform } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import CompletedTasks from "../CompletedTasks";
import StackNavigator from "./StackNavigator";

const { Navigator, Screen } = createBottomTabNavigator();

export const PATHS = {
  STACK: "STACK",
  Home: "Home",
  TODO_DETAILS: "TodoDetails",
  COMPLETED: "Completed Tasks",
};

const Router = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
        <Navigator
          screenOptions={{
            headerShown: Platform.OS === "ios",
            headerStyle: { backgroundColor: "#1976D2" },
            headerTitleStyle: {
              color: "#FFFFFF",
              fontSize: 20,
              fontWeight: "600",
            },
            tabBarStyle: {
              position: "absolute",
              bottom: 30,
              left: 20,
              right: 20,
              backgroundColor: "#1976D2",
              borderTopWidth: 0,
              borderRadius: 20,
              height: 55,
              elevation: 8,
              shadowColor: "#000",
              shadowOpacity: 0.15,
              shadowOffset: { width: 0, height: 3 },
              shadowRadius: 6,
              marginHorizontal: 10,
            },
            tabBarActiveTintColor: "#FFFFFF",
            tabBarInactiveTintColor: "#BBDEFB",
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "600",
              marginBottom: 5,
            },
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                activeOpacity={0.9}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 12,
                }}
              />
            ),
          }}
        >
          <Screen
            name={PATHS.STACK}
            component={StackNavigator}
            options={{
              headerTitle: "Todo App",
              tabBarIcon: ({ color }) => (
                <AntDesign name="home" size={16} color={color} />
              ),
              tabBarLabel: "Home",
            }}
          />
          <Screen
            name={PATHS.COMPLETED}
            component={CompletedTasks}
            options={{
              headerTitle: "Completed Tasks",
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="check-double" size={16} color={color} />
              ),
              tabBarLabel: "Completed",
            }}
          />
        </Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Router;
