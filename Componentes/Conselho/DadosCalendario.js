// Exibe as datas do calendário da RCC.
import React from "react";
import { View } from "react-native";
import CardCalendario from "../Card/CardCalendario";
import { TituloAmarelo } from "../Textos/Textos";
import estilo from "./estiloDadosCalendario";


export default function DadosCalendario(props){

    function lerDados(el){
        return <CardCalendario titulo={el.titulo} descricao={el.descricao} />
    }

    function lerGrupo(el){
        return <View style={estilo.blocoMes}>
            <TituloAmarelo  conteudo={el.mes}/>
                {el.content.map((element)=>lerDados(element))}
        </View>
    }

    return(
        <View style={estilo.container}>
            {props.dados.map(el => lerGrupo(el))}
        </View>
    );
}