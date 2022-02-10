//Essa é a primeira tela que aparece no aplicativo sendo primeira instalação ou não
import React , {useState} from 'react'
import { View, Image } from 'react-native';
import { TituloSplash } from '../Textos/Textos';
import estilo from './estilosSplash.js';
import LottieView from 'lottie-react-native';

export default function SplashBoasVindas(){
    
    return(
        <View style={estilo.containerBoasVindas}> 
            <Image  style={estilo.imagem} source={require('../../assets/logo.png')} />
            <View >
                <LottieView style={estilo.aviao}  source={require('../../assets/cat.json')} autoPlay loop />
                <TituloSplash conteudo={'Olá!'} />
            </View>
            
        </View>
    );
}