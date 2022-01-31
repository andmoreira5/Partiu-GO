//Esse card contem o dia e evento que irá acontecer.
import React from "react";
import { View, Text } from "react-native";
import estilo from "./estiloCardCalendario";

export default function CardCalendario(props){
    return(
        <View style={estilo.container}>
            <View style={estilo.traco}></View>
            <View>
                <Text style={estilo.data}>{props.titulo}</Text>
                <Text style={estilo.detalhes}>{props.descricao}</Text>
            </View>
        </View>
    );
}