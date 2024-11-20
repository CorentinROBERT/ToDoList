import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./Component/Header/Header";
import { CardToDo } from "./Component/CardToDo/CardToDo";
import { useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Sortir le chien", isCompleted: true },
    { id: 2, title: "Aller chez le garagiste", isCompleted: false },
    { id: 3, title: "Faire les courses", isCompleted: true },
    { id: 4, title: "Appeler le vétérinaire", isCompleted: true },
    { id: 5, title: "Sortir le chien", isCompleted: true },
    { id: 6, title: "Aller chez le garagiste", isCompleted: false },
    { id: 7, title: "Faire les courses", isCompleted: true },
    { id: 8, title: "Appeler le vétérinaire", isCompleted: true },
  ]);

  function renderTodoList() {
    return todoList.map((todo) => (
      <View style={s.cardItem} key={todo.id}>
        <CardToDo onPress={updateTodo} todo={todo}></CardToDo>
      </View>
    ));
  }

  function updateTodo(todo) {
    const updatedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };
    var itemIndex = todoList.findIndex(
      (currentItem) => currentItem.id === updatedTodo.id
    );
    const updatedTodoList = [...todoList];
    updatedTodoList[itemIndex] = updatedTodo;
    setTodoList(updatedTodoList);
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <ScrollView>{renderTodoList()}</ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}
