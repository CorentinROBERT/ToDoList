import { TouchableOpacity , Text, Image} from "react-native";
import { s } from "./CardToDo.style";
import checkImg from "../../assets/check.png"

export function CardToDo({todo,onPress,onLongPress}){
    return (
    <TouchableOpacity 
        onPress={()=>onPress(todo)} 
        onLongPress={()=> onLongPress(todo)} 
        style={s.card}>
            <Text 
                style={[s.text, todo.isCompleted && {textDecorationLine:"line-through"}]}>
                    {todo.title}
            </Text>
        { todo.isCompleted && <Image style={s.img} source={checkImg} />}
    </TouchableOpacity>);
}