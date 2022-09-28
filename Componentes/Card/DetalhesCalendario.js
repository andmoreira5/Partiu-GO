//componente que mostra os detalhes de calendário
import React from "react";
import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import estilo from "./estiloCardCalendario";

export default function DetalhesCalendario (props){
    return(
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Icon  name={props.nome} size={18} color='white'  />
            <Text style={estilo.detalhes} >{props.value}</Text>
        </View>
    )
}