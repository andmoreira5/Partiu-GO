import React, { Fragment } from "react";
import {ImageBackground} from 'react-native'
import { View, ScrollView } from "react-native";
import Card from "../Card/Card";
import dados from '../Dados/Conselho';
import { TituloBranco } from "../Textos/Textos";
import estilo from './estiloConselho'

export default function Conselho(){

    const imgFundo = require('../../assets/img/fundo.jpg')

    function lerDados(el){
        return <Card img={el.img} titulo={el.nome} descricao={el.funcao} />
    }

    return(
        <ImageBackground style={estilo.container} source={imgFundo}>
            <ScrollView>
                <View style={estilo.titulo}>
                    <TituloBranco conteudo={"Conselho da Cidade"} />
                </View>

                <View style={estilo.containerScroll}>
                    {dados.conselho.map((el)=>lerDados(el))}
                </View>
             </ScrollView>
        </ImageBackground>
    );
}