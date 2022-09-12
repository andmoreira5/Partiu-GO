//É o quadro branco informando se tem grupo hoje ou não

import React, {useContext} from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { TextoComumCinza, TextoComumLaranja } from "../Textos/Textos";
import estilo from './estiloCaixaDialogo';
import TratarDados from '../FuncoesLogicas/TratarDadosServidor'
import { Context } from '../Contexto'


export default function CaixaDialogoGrupo(){
    const {temas} = useContext(Context)
    let titulo = 'HOJE TEM GRUPO DE ORAÇÃO'
    

    function leitura(el){
        return <View style={estilo.itemTexto}>
             {/* <TextoComumCinza style={estilo.itemTexto} conteudo={el} /> */}
        </View>
    }

    
    return(
        <View style={estilo.container}>
            <View style={estilo.primeiraLinha}>
                <Icon style={estilo.icon} name="notifications" color={'#ef5a34'} />
                <TextoComumLaranja conteudo={titulo} />
            </View>
            <View style={estilo.conteudo}>
            {temas.map((el) => leitura(el))}
            </View>
            
        </View>
    );
}