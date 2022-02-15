import React, { useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import {View, Image} from 'react-native'
import LottieView from 'lottie-react-native';
import estilo from './estilosSplash'
import { TituloSplash } from "../Textos/Textos";
import { lerDado } from "../FuncoesLogicas/LerDados";
import UserContext from "./Context";

const TelaOla = ({route}) => {

    let dadosFormatados = ''

    const {setState, state} = useContext(UserContext)

    //alert(route.params.dados.temas.data[0].attributes.tema)

    function verifica(el){
        let content = el.attributes.grupo.data.attributes.nome
        content = content.concat('\nTEMA: ' +  el.attributes.tema)
        content = content.concat('\nLOCAL: ' + el.attributes.grupo.data.attributes.local)
        content = content.concat('\nENDEREÇO: '+ el.attributes.grupo.data.attributes.endereco)
        content = content.concat('\nHORÁRIO: '+  el.attributes.grupo.data.attributes.horario)
        dadosFormatados = content
    }

    route.params.dados.temas.data.map((el) => verifica(el))

    const navigation = useNavigation();
    let nn='Principal'
    if(lerDado('id')==''){
        nn = 'SplashInicial01'
    }
    setTimeout( () => {
        navigation.navigate(nn, {dados:dadosFormatados})
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

export default TelaOla