//Componente Detalhes dá algumas informações e a possibilidade de mudar o nome de usuário
import React from "react";
import { View, ScrollView ,  Image, Dimensions } from "react-native";
import LottieView from 'lottie-react-native'
import { TituloBranco } from "../Textos/Textos";
import estilo from '../Conselho/estiloConselho'
import { LinearGradient } from "expo-linear-gradient";
import TextoDetalhes from "./TextoDetalhes";
import { cores } from "../Configuracoes/Configuracoes";
import FaleComigo from "./FaleComigo";
import { StyleSheet } from "react-native";
import EditarNome from "./EditarNome";
import ListaDeGrupos from "./ListaDeGrupos";
import SubTitulo from "../Textos/SubTitulo";
import Extras from "./Extras";


export default function Detalhes(){

   return(
    <>
    <ScrollView>
        <LinearGradient colors={[cores.tom1Detalhes, cores.tom2Detalhes]}
            style={[estilo.container, {marginBottom:-2, }]}>
                
            <View style={estilo.titulo}>
                <TituloBranco conteudo='Sobre nós' />
            </View>
            <View style={{flex:1, alignItems:'center', marginTop:-25}}>
                <View style={estiloDet.viewImg}>
                    <Image style={estiloDet.img} source={require('../../assets/logo.png')} />
                </View>
            </View>
            <ScrollView horizontal={true}>
                <TextoDetalhes titulo='MISSÃO' descricao='Evangelizar com renovado ardor missionário, a partir da Experiência do Batismo no Espírito Santo, para fazer discípulos de nosso Senhor Jesus Cristo.' />
                <TextoDetalhes titulo='VISÃO' descricao='Tornar o Espírito Santo mais conhecido, amado e adorado, difundindo a espiritualidade e a Cultura de Pentecostes a partir do Grupo de Oração.' />
            </ScrollView>
        </LinearGradient>
        <LottieView style={{width:'100%'}}  source={require('../../assets/gato-banho.json')} autoPlay loop />
        <LinearGradient colors={[cores.tom2Detalhes, cores.tom3Detalhes]}
            style={[estilo.container, {marginBottom:-5, marginTop:-3 }]}>
                
                <View>
                    <SubTitulo subTitulo = {'Grupos de Oração\nRCC Missão Velha - CE'}/>
                    <ListaDeGrupos />
                </View>

                <EditarNome />

                <Extras />

                <FaleComigo />

        </LinearGradient>
    </ScrollView>

        </>
    );
}

const estiloDet = StyleSheet.create({
    img:{
        width:Dimensions.get('window').width*0.5, 
        resizeMode:"contain", 
        height:Dimensions.get('window').width*0.2
    },
    viewImg:{
        padding:10, 
        borderRadius:50, 
        backgroundColor:'white', 
        flex:1, 
        alignItems:'center', 
        width:Dimensions.get('window').width*0.6
    }
})