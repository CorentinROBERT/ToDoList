import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },

  header: {
    flex: 1,
  },

  body: {
    flex: 5,
  },

  footer: {
    height: 70,
    backgroundColor: "green",
  },

  app: {
    backgroundColor: "#f9f9f9",
    flex: 1,
    padding: 10,
  },

  cardItem: {
    marginBottom: 20,
    marginHorizontal: 2,
  },
});

export { s };
