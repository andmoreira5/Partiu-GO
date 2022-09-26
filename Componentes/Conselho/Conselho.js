import React from "react";
import {ImageBackground} from 'react-native'
import { View, ScrollView } from "react-native";

import { TituloBranco } from "../Textos/Textos";
import DadosComFoto from "./DadosComFoto";
import estilo from './estiloConselho'

export default function Conselho(props){

    const imgFundo = require('../../assets/img/fundo.jpg')
    console.log('daaaa\n ' + props.dados[0])

   return(
        <ImageBackground style={estilo.container} source={imgFundo}>
            <ScrollView>
                <View style={estilo.titulo}>
                    <TituloBranco conteudo={props.titulo} />
                </View>
                <DadosComFoto dados={props.dados} />
                

             </ScrollView>
        </ImageBackground>
    );
}

{/* <Image
          style={{width: '100%', height: '50%'}}
          source={{uri:'http://192.168.0.129:1337/uploads/sves_5a06757b53.jpg'}}
      /> */}