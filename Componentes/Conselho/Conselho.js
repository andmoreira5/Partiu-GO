import React from "react";
import {ImageBackground} from 'react-native'
import { View, ScrollView } from "react-native";

import { TituloBranco } from "../Textos/Textos";
import estilo from './estiloConselho'

export default function Conselho(props){

    const imgFundo = require('../../assets/img/fundo.jpg')

   return(
        <ImageBackground style={estilo.container} source={imgFundo}>
            <ScrollView>
                <View style={estilo.titulo}>
                    <TituloBranco conteudo={props.titulo} />
                </View>

                {props.dados}

             </ScrollView>
        </ImageBackground>
    );
}