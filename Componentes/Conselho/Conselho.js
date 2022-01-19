import React, { Fragment } from "react";
import {ImageBackground} from 'react-native'
import { View, ScrollView } from "react-native";
import Card from "../Card/Card";

import { TituloBranco } from "../Textos/Textos";
import estilo from './estiloConselho'

export default function Conselho(props){

    const imgFundo = require('../../assets/img/fundo.jpg')

    function lerDados(el){
        return <Card img={el.img} titulo={el.titulo} descricao={el.descricao} />
    }

    return(
        <ImageBackground style={estilo.container} source={imgFundo}>
            <ScrollView>
                <View style={estilo.titulo}>
                    <TituloBranco conteudo={props.titulo} />
                </View>

                <View style={estilo.containerScroll}>
                    {props.dados.map((el)=>lerDados(el))}
                </View>
             </ScrollView>
        </ImageBackground>
    );
}