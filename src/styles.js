import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    width: "100%",
    marginVertical: 10,
    height: 52,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  submitBtn: {
    width: "100%",
    backgroundColor: "#1976D2",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 8,
    shadowColor: "#1976D2",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },

  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  dividerLine: {
    height: 1,
    width: "100%",
    backgroundColor: "#E0E0E0",
    marginVertical: 20,
  },

  filterContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },

  filterBtn: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: "#FFFFFF",
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    elevation: 2,
  },

  filterText: {
    color: "#333333",
    fontSize: 15,
    fontWeight: "500",
  },

  activeFilterBtn: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: "#1976D2",
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    elevation: 3,
  },

  activeFilterText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },

  todosContainer: {
    marginTop: 20,
    width: "100%",
    flexGrow: 1,
  },

  doneTodo: {
    textDecorationLine: "line-through",
    color: "#9E9E9E",
  },
});
