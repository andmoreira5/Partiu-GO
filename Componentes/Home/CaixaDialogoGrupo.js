//É o quadro branco informando se tem grupo hoje ou não

import React, {useContext} from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { lerDado } from "../FuncoesLogicas/LerDados";
import { TextoComumCinza, TextoComumLaranja } from "../Textos/Textos";
import estilo from './estiloCaixaDialogo';
import UserContext from "../SplashScreen/Context";
import TratarDados from '../FuncoesLogicas/TratarDadosServidor'

export default function CaixaDialogoGrupo(){
    
    const {titulo, conteudo}  = TratarDados()

    function leitura(el){
        return <View style={estilo.itemTexto}>
             <TextoComumCinza style={estilo.itemTexto} conteudo={el} />
        </View>
       
    }

    
    return(
        <View style={estilo.container}>
            <View style={estilo.primeiraLinha}>
                <Icon style={estilo.icon} name="notifications" color={'#ef5a34'} />
                <TextoComumLaranja conteudo={titulo} />
            </View>
            <View style={estilo.conteudo}>
            {conteudo.map((el) => leitura(el))}
            </View>
            
        </View>
    );
}