//É o quadro branco informando se tem grupo hoje ou não

import React, {useState} from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import identificarGrupo from "../FuncoesLogicas/IdentificarGrupo";
import { TextoComumCinza, TextoComumLaranja } from "../Textos/Textos";
import estilo from './estiloCaixaDialogo';

export default function CaixaDialogoGrupo(){
    let titulo = '', conteudo=[];

    var [detalhes, setDetalhes] = useState('');

    const gruposDeHoje = identificarGrupo();
    if(gruposDeHoje.length>0){
        titulo = "HOJE TEM GRUPO DE ORAÇÃO"
        gruposDeHoje.map(grupo => retornarConteudo(grupo));
    }else{
        titulo="HOJE NÃO TEM GRUPO DE ORAÇÃO"
    }
    
    function retornarConteudo(grupo){
        conteudo.push(
            <TextoComumCinza conteudo={grupo.nome + '\n\n' + grupo.horario + ' na '+ grupo.local 
        + '\n' + grupo.endereco+'\n'} />
        )
    }

    

    return(
        <View style={estilo.container}>
            <View style={estilo.primeiraLinha}>
                <Icon style={estilo.icon} name="notifications" color={'#ef5a34'} />
                <TextoComumLaranja conteudo={titulo} />
            </View>
            <View style={estilo.conteudo}>
            {conteudo}
            </View>
            
        </View>
    );
}