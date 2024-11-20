import { TouchableOpacity , Text, Image} from "react-native";
import { s } from "./CardToDo.style";
import checkImg from "../../assets/check.png"
import { useState } from "react";

export function CardToDo({todo,onPress}){
    function _onPress(){
        onPress(todo);
    }
    return <>
        <TouchableOpacity onPress={_onPress} style={s.card}>
            <Text style={[s.text, todo.isCompleted && {textDecorationLine:"line-through"}]}>{todo.title}</Text>
            { todo.isCompleted && <Image style={s.img} source={checkImg} />}
        </TouchableOpacity>
    </>;
}