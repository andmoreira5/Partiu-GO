import AnimatedLottieView from "lottie-react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Dimensions } from "react-native";
import { View } from "react-native";
import { Animated } from "react-native";
import ListaDeGrupos from "../Detalhes/ListaDeGrupos";

export default function CardHojeNaoTemGrupo(){
    const [verGrupos, setVerGrupos] = useState(false)
    const [width, setWidth] = useState(new Animated.Value(Dimensions.get('window').width*0.7));
    const [textoBotao, setTextoBotao] = useState('VER DIA DOS GRUPOS') 
    const opacityInicial = useRef(new Animated.Value(1)).current;
    const opacityGrupos = useRef(new Animated.Value(0)).current;

    useEffect(()=>{
        toggleWidth();
        verGrupos ? setTextoBotao('RETORNAR') : setTextoBotao('VER DIA DOS GRUPOS')
    }, [verGrupos]);

    const toggleWidth = () => {
        const toValue = verGrupos ? Dimensions.get('window').width*0.9 : Dimensions.get('window').width*0.7;
        Animated.timing(width, {
            toValue,
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    const fadeIn = (element) => {
      Animated.timing(element, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    };
  
    const fadeOut = (element) => {
      Animated.timing(element, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    };

    const renderGrupos = () => {
        return (
          <Animated.View style={ { opacity: opacityGrupos }}>
              <Text className="text-center font-bold mt-2" style={{ color: '#704220' }}>
                GRUPOS DE ORAÇÃO{'\n'}RCC MISSÃO VELHA
              </Text>
              <ListaDeGrupos />
            </Animated.View>
        );
    }

    const renderNaoTemGrupo = () => {
        return (
          <Animated.View style={ { opacity: opacityInicial }}>
              <Text style={estilo.texto} className='my-2'>
                HOJE NÃO TEM{'\n'}GRUPO DE ORAÇÃO{'\n'}EM MISSÃO VELHA - CE
              </Text>
              <AnimatedLottieView style={estilo.animacao} source={require('../../assets/cat2.json')} loop autoPlay />
              <Text style={[estilo.texto, estilo.subtitulo]}>Reze pela RCC!</Text>
            </Animated.View>
        );
    }

    return (
        <View style={estilo.container}>
            <Animated.View style={[estilo.view, { width: width }]}>
                {verGrupos ? renderGrupos() : renderNaoTemGrupo()}
                <TouchableOpacity className="items-center" onPress={() => {
                    if(!verGrupos){
                      fadeOut(opacityInicial)
                      setTimeout(()=>setVerGrupos(!verGrupos), 200)
                      setTimeout(()=>fadeIn(opacityGrupos), 1000)
                      
                    }else{
                      fadeOut(opacityGrupos)
                      setTimeout(()=>setVerGrupos(!verGrupos), 400)
                      setTimeout(()=>fadeIn(opacityInicial), 1000)
                    }
                  }}>
                <Text className="p-2 mb-3 text-white rounded-lg px-4" style={{ backgroundColor: '#704220' }}>
                  {textoBotao}
                </Text>
              </TouchableOpacity>
            </Animated.View>
        </View>
    );
}


const estilo = StyleSheet.create({
    container:{
        borderRadius:20, 
        paddingTop:5, 
        backgroundColor: '#ffefcf', 
        elevation:20,
        paddingHorizontal:1,
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
        width:Dimensions.get('window').width*0.69, 
        marginTop:-17,
    }
})