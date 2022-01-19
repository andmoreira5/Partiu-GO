//tela inicial. A tela principal do aplicativo.
import React from "react";
import {ImageBackground, View} from 'react-native';
import lerHorarioDia from '../FuncoesLogicas/LerHorarioDia';
import { TituloBranco } from "../Textos/Textos";
import estilo from './estiloHome';
import CaixaDialogoGrupo from './CaixaDialogoGrupo';
import { lerDado } from "../FuncoesLogicas/LerDados";


export default function Home(){


    const [img, frase] = lerHorarioDia();
    let nomeUsuario = lerDado('id');
    if(nomeUsuario===''){ //formatando a exibição.
        nomeUsuario = '!';
    }else{
        nomeUsuario = ', '+nomeUsuario+'!';
    }

  
    return(
        <View style={estilo.container}>
            <ImageBackground 
            source={img} 
            style={estilo.imageBackground}>
                <TituloBranco 
                 conteudo={frase+nomeUsuario}
                 style={estilo.titulo}/>

                <CaixaDialogoGrupo />
            </ImageBackground>
        </View>
    );
}