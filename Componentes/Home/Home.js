//tela inicial. A tela principal do aplicativo.
import React , {useContext }from "react";
import {ImageBackground, View} from 'react-native';
import lerHorarioDia from '../FuncoesLogicas/LerHorarioDia';
import { TituloBranco } from "../Textos/Textos";
import estilo from './estiloHome';
import CaixaDialogoGrupo from './CaixaDialogoGrupo';
import { lerDado } from "../FuncoesLogicas/LerDados";
import UserContext from "../SplashScreen/Context";



export default function Home(props){

    

    const [img, frase] = lerHorarioDia();
    let nomeUsuario = lerDado('id');
    if(nomeUsuario==='' || nomeUsuario==='$0'){ //formatando a exibição.
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