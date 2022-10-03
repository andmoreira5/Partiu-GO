//mostra as informações de Missão e visão da RCC
import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function TextoDetalhes(props){
    return(
        <View style={estilo.container}>
            <Text style={estilo.titulo}>{props.titulo}</Text>
            <Text style={estilo.descricao}>{props.descricao}</Text>
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
    titulo:{
        fontWeight:'bold',
        borderBottomColor:'white',
        borderBottomWidth:1,
        paddingBottom:5,
        marginBottom:5,
    }, 
    descricao:{
        fontSize:16,
    },
    
})