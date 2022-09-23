//Esse card será exibido quando não tiver Grupo de oração

import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { Dimensions } from "react-native";
import { View } from "react-native";

export default function CardHojeNaoTemGrupo(){
    return(
        <View style={estilo.container}>
            <Text style={estilo.texto}>HOJE NÃO TEM{'\n'}GRUPO DE ORAÇÃO</Text>
            <AnimatedLottieView style={estilo.animacao} source={require('../../assets/cat2.json')}  loop autoPlay/>
            <Text  style={[estilo.texto, estilo.subtitulo]}>Reze pela RCC!</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        borderRadius:20, 
        paddingTop:5, 
        backgroundColor: '#ffefcf', 
        elevation:20,
    },
    texto:{
        color:'#704220', 
        zIndex:1, 
        width:Dimensions.get('window').width*0.7, 
        fontWeight:'bold', 
        textAlign:'center',
    },
    subtitulo:{
        fontSize:18, 
        marginTop:-30, 
        paddingBottom:5
    },
    animacao:{
        width:Dimensions.get('window').width*0.7, 
        marginTop:-17,
        
    }
})