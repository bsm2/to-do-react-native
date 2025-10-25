import Router from "./src/Router/Router";
import { StatusBar, Platform } from "react-native";


export default function App() {
  return (
    <>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
      <Router />
    </>
  );
}
