import React , {useState} from 'react';
import estilo from './estilosSplash.js';
import {View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import { TituloAmarelo, TituloBranco } from '../Textos/Textos.js';
import { BotaoTransparente } from '../Botao/Botao.js';
import AsyncStorage  from '@react-native-async-storage/async-storage';

export default function SplashInicial02(){
  const [value,setValue] = useState('pessoa não identificada');

  React.useEffect(() => 
    getData(), []
  );

   async function getData(){
    const response =  await AsyncStorage.getItem("id");
    setValue(response);
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
          <BotaoTransparente title='RUMBORA >'/>
        </View>
      </LinearGradient>
    </>
  );
}