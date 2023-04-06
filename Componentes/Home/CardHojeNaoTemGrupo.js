import AnimatedLottieView from "lottie-react-native";
import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Dimensions } from "react-native";
import { View } from "react-native";
import { Context } from "../Contexto";
import CardHojeTemGrupo from "./CardHojeTemGrupo";
import { Animated } from "react-native";

export default function CardHojeNaoTemGrupo(){
    const { grupos } = useContext(Context);
    const [verGrupos, setVerGrupos] = useState(false)
    const [width, setWidth] = useState(new Animated.Value(Dimensions.get('window').width*0.7));

    useEffect(()=>{
        toggleWidth();
    }, [verGrupos]);

    const toggleWidth = () => {
        const toValue = verGrupos ? Dimensions.get('window').width*0.9 : Dimensions.get('window').width*0.7;
        Animated.timing(width, {
            toValue,
            duration: 500,
            useNativeDriver: false,
        }).start();
    };


  return (
    <Animated.View style={[estilo.container, { width: width }]}>
      {verGrupos ? (
        <>
          <Text className="text-center font-bold my-2" style={{ color: '#704220' }}>
            GRUPOS DE ORAÇÃO{'\n'}RCC MISSÃO VELHA
          </Text>
          <ScrollView horizontal={true} className="my-5">
            {grupos.map((el, index) => {
              return <CardHojeTemGrupo item={el} key={index} className="p-8" />;
            })}
          </ScrollView>
          <TouchableOpacity className="items-center" onPress={() => setVerGrupos(!verGrupos)}>
            <Text className="p-2 mb-3 text-white rounded-lg" style={{ backgroundColor: '#704220' }}>
              RETORNAR
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={estilo.texto}>
            HOJE NÃO TEM{'\n'}GRUPO DE ORAÇÃO{'\n'}EM MISSÃO VELHA - CE
          </Text>
          <AnimatedLottieView style={estilo.animacao} source={require('../../assets/cat2.json')} loop autoPlay />
          <Text style={[estilo.texto, estilo.subtitulo]}>Reze pela RCC!</Text>
          <TouchableOpacity className="items-center" onPress={() => setVerGrupos(!verGrupos)}>
            <Text className="p-2 mb-3 text-white rounded-lg" style={{ backgroundColor: '#704220' }}>
              VER DIA DOS GRUPOS
            </Text>
          </TouchableOpacity>
        </>
      )}
    </Animated.View>
  );
}

const estilo = StyleSheet.create({
    container:{
        borderRadius:20, 
        paddingTop:5, 
        backgroundColor: '#ffefcf', 
        elevation:20,
        paddingHorizontal:1
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
        marginTop:-35, 
        paddingBottom:10
    },
    animacao:{
        width:Dimensions.get('window').width*0.7, 
        marginTop:-17,
    }
})