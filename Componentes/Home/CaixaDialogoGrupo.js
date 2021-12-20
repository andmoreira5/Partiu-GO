//É o quadro branco informando se tem grupo hoje ou não

import React from "react";
import { View } from "react-native";
import { grupos } from "../Dados/Dados";
import identificarGrupo from "../FuncoesLogicas/IdentificarGrupo";
import { TextoComumCinza } from "../Textos/Textos";

export default function CaixaDialogoGrupo(){
    let titulo = '', conteudo=[];

    const gruposDeHoje = identificarGrupo();
    if(gruposDeHoje.length>0){
        titulo = "HOJE TEM GRUPO DE ORAÇÃO"
        gruposDeHoje.map(grupo => retornarConteudo(grupo));
    }else{
        titulo="HOJE NÃO TEM GRUPO DE ORAÇÃO"
    }
    
    function retornarConteudo(grupo){
        conteudo.push(
            <TextoComumCinza conteudo={grupo.nome}/>
        )
    }


    return(
        <View>

        </View>
    );
}