//Componente Detalhes dá algumas informações e a possibilidade de mudar o nome de usuário
import React from "react";
import { Text } from "react-native";
import {ImageBackground} from 'react-native'
import { View, ScrollView } from "react-native";

import { TituloBranco } from "../Textos/Textos";
import estilo from '../Conselho/estiloConselho'

export default function Detalhes(props){

    const imgFundo = require('../../assets/img/fundo.jpg')

   return(
        <ImageBackground style={estilo.container} source={imgFundo}>
            <ScrollView>
                <View style={estilo.titulo}>
                    <TituloBranco conteudo='Sobre nós' />
                </View>
             </ScrollView>
        </ImageBackground>
    );
}
