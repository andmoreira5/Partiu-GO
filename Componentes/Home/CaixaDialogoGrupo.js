//É o quadro branco informando se tem grupo hoje ou não

import React, {useState} from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import identificarGrupo from "../FuncoesLogicas/IdentificarGrupo";
import { lerDado } from "../FuncoesLogicas/LerDados";
import { TextoComumCinza, TextoComumLaranja } from "../Textos/Textos";
import estilo from './estiloCaixaDialogo';

export default function CaixaDialogoGrupo(){
   
    return(
        <View style={estilo.container}>
            <View style={estilo.primeiraLinha}>
                <Icon style={estilo.icon} name="notifications" color={'#ef5a34'} />
                <TextoComumLaranja conteudo={lerDado('titulo')} />
            </View>
            <View style={estilo.conteudo}>
            <TextoComumCinza conteudo={lerDado('conteudo')} />
            </View>
            
        </View>
    );
}