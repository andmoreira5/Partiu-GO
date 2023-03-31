import React from 'react'
import {View, Image} from 'react-native'
import { TextoComumCinza, TextoComumLaranja } from '../Textos/Textos';
import estilo from './estiloCard';

export default function Card(props){

    return(
        <View style={estilo.container}>
            <Image source={props.img} className='w-24 h-24 m-1 rounded-tl-lg'/>
            <View style={estilo.areaTexto}>
                <TextoComumLaranja conteudo={props.titulo} />
                <TextoComumCinza conteudo={props.descricao}/>
            </View>
        </View>
    );
}