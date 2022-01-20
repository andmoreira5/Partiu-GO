import React from "react";
import {ImageBackground} from 'react-native'
import { View, ScrollView } from "react-native";
import Card from "../Card/Card";

import { TituloBranco, TituloAmarelo } from "../Textos/Textos";
import estilo from './estiloConselho'

export default function Conselho(props){

    const imgFundo = require('../../assets/img/fundo.jpg')

    function lerDados(el){
        return <Card img={el.img} titulo={el.titulo} descricao={el.descricao} />
    }

    function lerGrupo(el){
        return <View>
            <TituloAmarelo  conteudo={el.grupo}/>
                {el.content.map((element)=>lerDados(element))}
        </View>
    }

    return(
        <ImageBackground style={estilo.container} source={imgFundo}>
            <ScrollView>
                <View style={estilo.titulo}>
                    <TituloBranco conteudo={props.titulo} />
                </View>

                <View style={estilo.containerScroll}>
                    {props.dados.map((el)=>lerGrupo(el))}
                </View>
             </ScrollView>
        </ImageBackground>
    );
}