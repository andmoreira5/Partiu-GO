//mostra as informações de Missão e visão da RCC
import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function TextoDetalhes(props){
    return(
        <View  style={estilo.container} >
            <Text className='text-white font-bold  border-b-white border-b-2 mb-2 pb-2' >{props.titulo}</Text>
            <Text className='text-white opacity-80 text-justify'>{props.descricao}</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        margin:10,
        marginTop:40,
        backgroundColor:'#0003',
        padding:15,
        width:Dimensions.get('window').width*0.7
    },    
})