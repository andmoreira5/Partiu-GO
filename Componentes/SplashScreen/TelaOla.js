import React, { useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import {View, Image} from 'react-native'
import LottieView from 'lottie-react-native';
import estilo from './estilosSplash'
import { TituloSplash } from "../Textos/Textos";
import { lerDado } from "../FuncoesLogicas/LerDados";
import UserContext from "./Context";
import { OrganizarDadosServidor } from "../FuncoesLogicas/TratarDadosServidor";

export default function TelaOla () {

    const {nomeUsuario} = useContext(UserContext)
    

    // OrganizarDadosServidor(state, route.params.dados.temas)

    const navigation = useNavigation();
    let nn='Principal'
    if(nomeUsuario===''){
        nn = 'SplashInicial01'
    }
    setTimeout( () => {
        navigation.navigate(nn)
     },6000);
    
    return(
        <View style={estilo.containerBoasVindas}> 
        <Image  style={estilo.imagem} source={require('../../assets/logo.png')} />
        <View >
            <LottieView style={estilo.aviao}  source={require('../../assets/cat.json')} autoPlay loop />
            <TituloSplash conteudo={'Olá!'} />
        </View>
    </View>
        
    )
}