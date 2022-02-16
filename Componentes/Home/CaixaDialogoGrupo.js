//É o quadro branco informando se tem grupo hoje ou não

import React, {useContext} from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import identificarGrupo from "../FuncoesLogicas/IdentificarGrupo";
import { lerDado } from "../FuncoesLogicas/LerDados";
import { TextoComumCinza, TextoComumLaranja } from "../Textos/Textos";
import estilo from './estiloCaixaDialogo';
import UserContext from "../SplashScreen/Context";

export default function CaixaDialogoGrupo(){
    
    const {setState, state} = useContext(UserContext)
    let dadosDoServidor = state.temas;

   
    return(
        <View style={estilo.container}>
            <View style={estilo.primeiraLinha}>
                <Icon style={estilo.icon} name="notifications" color={'#ef5a34'} />
                <TextoComumLaranja conteudo={lerDado('titulo')} />
            </View>
            <View style={estilo.conteudo}>
            <TextoComumCinza conteudo={state.temas[0]} />
            </View>
            
        </View>
    );
}