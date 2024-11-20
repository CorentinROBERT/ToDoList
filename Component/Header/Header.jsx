import { s } from "./Header.style";
import { Image, Text } from "react-native";
import logo  from "../../assets/logo.png";

export function Header(){
    return (
    <>
        <Image style={s.image} source={logo} resizeMode="contain" />
        <Text style={s.text}>Tu as probablement un truc a faire</Text>
    </>
    );
}