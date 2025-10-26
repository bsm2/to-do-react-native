import { Provider } from "react-redux";
import Router from "./src/Router/Router";
import { StatusBar, Platform } from "react-native";
import { store } from "./src/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar
          barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
        />
        <Router />
      </Provider>
    </>
  );
}
