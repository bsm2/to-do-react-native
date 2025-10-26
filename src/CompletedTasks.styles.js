import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FAFAFA",
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1976D2",
    marginBottom: 15,
  },
  todoItem: {
    backgroundColor: "#E3F2FD",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#1976D2",
  },
  title: {
    fontSize: 18,
    color: "#0D47A1",
    textDecorationLine: "line-through",
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 40,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
