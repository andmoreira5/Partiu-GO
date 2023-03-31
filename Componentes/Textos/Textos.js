//Todas as configurações de texto estão aqui

import React from "react";
import { Text } from "react-native"
import estiloTextos from './estiloTextos'

export  function TituloBranco(props){
    return(
        <Text className='text-white text-2xl font-bold'  >{props.conteudo}</Text>
    );
}

export function TituloAmarelo(props){
    return(
        <Text style={estiloTextos.tituloAmarelo} >{props.conteudo}</Text>
    );
}

export function TextoComum(props){
    return(
        <Text style={estiloTextos.textoComum} className='text-white'>{props.conteudo}</Text>
    );
}

export function TextoComumCinza(props){
    return(
        <Text style={estiloTextos.textoComumCinza} className='pb-1' >{props.conteudo}</Text>
    );
}

export function TextoComumLaranja(props){
    return(
        <Text style={estiloTextos.textoComumLaranja} className='font-bold py-1' >{props.conteudo}</Text>
    );
}

export function TituloSplash(props){
    return(
        <Text style={estiloTextos.tituloSplash} >{props.conteudo}</Text>
    );
}