//tela inicial. A tela principal do aplicativo.
import React, { useContext } from "react";
import {ImageBackground, View} from 'react-native';
import lerHorarioDia from '../FuncoesLogicas/LerHorarioDia';
import { TituloBranco } from "../Textos/Textos";
import estilo from './estiloHome';
import CaixaDialogoGrupo from './CaixaDialogoGrupo';
import { Context } from '../Contexto'


export default function Home(){
    const {nomeUsuario} = useContext(Context)
    const [img, frase] = lerHorarioDia();

    let nomeParaMostrar = ', ' + nomeUsuario + '!'
    if(nomeUsuario==='' || nomeUsuario==='$0'){ //formatando a exibição.
        nomeParaMostrar = '!';
    }
  
    return(
        <View style={estilo.container}>
            <ImageBackground 
            source={img} 
            style={estilo.imageBackground}>
                <TituloBranco 
                 conteudo={frase+nomeParaMostrar}
                 style={estilo.titulo}/>

                <CaixaDialogoGrupo />
            </ImageBackground>
        </View>
    );
}