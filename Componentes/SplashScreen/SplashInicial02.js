import React, { useContext }  from 'react';
import estilo from './estilosSplash.js';
import {View, StatusBar} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import { TituloAmarelo, TituloBranco } from '../Textos/Textos.js';
import { BotaoTransparente } from '../Botao/Botao.js';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../Contexto'


export default function SplashInicial02(){
  const {nomeUsuario} = useContext(Context)
  const navigation = useNavigation()
  let nomeParaMostrar = nomeUsuario

  if(nomeUsuario==='' || nomeUsuario==='$0'){
    nomeParaMostrar = 'pessoa não identificada';
  }

  function navegarParaHome(){
    navigation.navigate('Principal');
  }
  
  return(
    <>
    <StatusBar backgroundColor="#bfe4f6" barStyle='dark-content' />
      <LottieView style={estilo.aviao} source={require('../../assets/aviao.json')} autoPlay loop />
      <LinearGradient
        // Button Linear Gradient
        colors={['#297b1e', '#174911']}
        style={estilo.gradienteVerde}>
        
        <TituloBranco conteudo={'É uma alegria ter você aqui, ' + nomeParaMostrar + '!'}/>
        <View>
          <TituloAmarelo conteudo='E aí, Partiu Grupo de Oração?' />
          <BotaoTransparente title='RUMBORA >' onPress={navegarParaHome}/>
        </View>
      </LinearGradient>
    </>
  );
}