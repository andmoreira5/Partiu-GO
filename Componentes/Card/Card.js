import React from 'react'
import {View, Image} from 'react-native'
import { TextoComumCinza, TextoComumLaranja } from '../Textos/Textos';
import estilo from './estiloCard';

export default function Card(props){

    return(
        <View style={estilo.container}>
            <Image source={props.img} style={estilo.imagem} />
            <View style={estilo.areaTexto}>
                <TextoComumLaranja conteudo={props.titulo} style={estilo.nome}/>
                <TextoComumCinza conteudo={props.descricao}/>
            </View>
        </View>
    );
}