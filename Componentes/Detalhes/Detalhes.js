//Componente Detalhes dá algumas informações e a possibilidade de mudar o nome de usuário
import React from "react";
import { View, ScrollView , ImageBackground, Dimensions} from "react-native";
import LottieView from 'lottie-react-native'

import { TituloBranco } from "../Textos/Textos";
import estilo from '../Conselho/estiloConselho'
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import TextoDetalhes from "./TextoDetalhes";
import { Text } from "react-native";

export default function Detalhes(props){

    const imgFundo = require('../../assets/img/fundo.jpg')

   return(
    <>
    <ScrollView>
    <LinearGradient colors={['#BA5232', '#DB8064']}
    style={[estilo.container, {marginBottom:-2, }]}>
            
                <View style={estilo.titulo}>
                    <TituloBranco conteudo='Sobre nós' />
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                    <View style={{padding:10, borderRadius:50, backgroundColor:'white', flex:1, alignItems:'center', width:Dimensions.get('window').width*0.6}}>
                        <Image style={{width:Dimensions.get('window').width*0.5, resizeMode:"contain", height:Dimensions.get('window').width*0.2}} source={require('../../assets/logo.png')} />
                    </View>
                </View>
                <ScrollView horizontal={true}>
                    <TextoDetalhes titulo='MISSÃO' descricao='Evangelizar com renovado ardor missionário, a partir da Experiência do Batismo no Espírito Santo, para fazer discípulos de nosso Senhor Jesus Cristo.' />
                    <TextoDetalhes titulo='VISÃO' descricao='Tornar o Espírito Santo mais conhecido, amado e adorado, difundindo a espiritualidade e a Cultura de Pentecostes a partir do Grupo de Oração.' />
                </ScrollView>
             
        </LinearGradient>
        <LottieView style={{width:Dimensions.get('window').width, height:'50%'}}  source={require('../../assets/gato-banho.json')} autoPlay loop />
        <LinearGradient colors={['#DB8064', '#BA5232']}
            style={[estilo.container, {marginBottom:-2, }]}>
                <Text>dsfdsfh</Text>
                <Text>dsfdsfh</Text>
                <Text>dsfdsfh</Text>
                <Text>dsfdsfh</Text>
                <Text>dsfdsfh</Text>
                <Text>dsfdsfh</Text>
                <Text>dsfdsfh</Text>
        </LinearGradient>
    </ScrollView>

        </>
    );
}
