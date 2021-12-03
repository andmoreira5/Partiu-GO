import React from 'react';
import estilo from './estilosSplash.js';
import {View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TextosSplash01 from './TextosSplash01'
import LottieView from 'lottie-react-native';
import { TituloAmarelo, TituloBranco } from '../Textos/Textos.js';
import { BotaoTransparente } from '../Botao/Botao.js';

export default function SplashInicial02(){

  return(
    <>
      <LottieView style={estilo.aviao} source={require('../../assets/aviao.json')} autoPlay loop />
      <LinearGradient
        // Button Linear Gradient
        colors={['#297b1e', '#174911']}
        style={estilo.gradienteVerde}>
        
        <TituloBranco conteudo='É uma alegria ter você aqui!'/>
        <View>
          <TituloAmarelo conteudo='E aí, Partiu Grupo de Oração?' />
          <BotaoTransparente title='RUMBORA >'/>
        </View>
      </LinearGradient>
    </>
  );
}