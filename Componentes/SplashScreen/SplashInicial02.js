import React, { useContext }  from 'react';
import estilo from './estilosSplash.js';
import {View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import { TituloAmarelo, TituloBranco } from '../Textos/Textos.js';
import { BotaoTransparente } from '../Botao/Botao.js';
import { useNavigation } from '@react-navigation/native';
import { gravarDado, lerDado } from '../FuncoesLogicas/LerDados.js';
import UserContext from './Context.js';


export default function SplashInicial02(){
  const navigation = useNavigation();

  const {setState, state} = useContext(UserContext)

  let value = state.nomeUsuario;
  
  if(value==='' || value==='$0'){
    value = 'pessoa não identificada';
  }

  function navegarParaHome(){
    navigation.navigate('Principal');
  }
  
  return(
    <>
      <LottieView style={estilo.aviao} source={require('../../assets/aviao.json')} autoPlay loop />
      <LinearGradient
        // Button Linear Gradient
        colors={['#297b1e', '#174911']}
        style={estilo.gradienteVerde}>
        
        <TituloBranco conteudo={'É uma alegria ter você aqui, ' + value + '!'}/>
        <View>
          <TituloAmarelo conteudo='E aí, Partiu Grupo de Oração?' />
          <BotaoTransparente title='RUMBORA >' onPress={navegarParaHome}/>
        </View>
      </LinearGradient>
    </>
  );
}