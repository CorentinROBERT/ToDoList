import { TouchableOpacity , Text, Image, View} from "react-native";
import { s } from "./ButtonAdd.style";

export function ButtonAdd({onPress}){
    return (
        <TouchableOpacity style={s.button} onPress={onPress}>
            <Text style={s.text}>+ new Todo</Text>
        </TouchableOpacity>
    );
}