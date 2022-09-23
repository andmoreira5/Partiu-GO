import React from 'react';
import {Image, View} from 'react-native';
import estilo from './estilosSplash.js';
import { LinearGradient } from 'expo-linear-gradient';
import TextosSplash01 from './TextosSplash01'
import LottieView from 'lottie-react-native';


export default function SplashInicial(){
 

  return(
    <View style={estilo.container}>
      <Image style={estilo.imagem} source={require('../../assets/logo.png')} />
      <LottieView style={estilo.ondas}  source={require('../../assets/ondas.json')} autoPlay loop />
      <LinearGradient
        // Button Linear Gradient
        colors={['#68b5b8', '#3b5998']}
        style={estilo.gradiente}>

        <TextosSplash01 />

      </LinearGradient>
    </View>
  );
}