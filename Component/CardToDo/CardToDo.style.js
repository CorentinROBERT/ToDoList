import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  card: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    height: 115,
    borderRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  img: {
    width: 25,
    height: 25,
  },
  text: {
    fontSize: 25,
  },
});
