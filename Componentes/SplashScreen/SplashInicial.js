import React from 'react';
import {Image} from 'react-native';
import estilo from './estilosSplash.js';
import { LinearGradient } from 'expo-linear-gradient';
import Texto01 from './Textos01'
import LottieView from 'lottie-react-native';

export default function SplashInicial(){
  return(
    <>
      <Image style={estilo.imagem} source={require('../../assets/logo.png')} />
      <LottieView style={estilo.ondas} source={require('./ondas.json')} autoPlay loop />
      <LinearGradient
        // Button Linear Gradient
        colors={['#68b5b8', '#3b5998']}
        style={estilo.gradiente}>

        <Texto01 />

      </LinearGradient>
    </>
  );
}