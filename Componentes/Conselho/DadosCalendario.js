// Exibe as datas do calendário da RCC.
import React from "react";
import { View } from "react-native";
import CardCalendario from "../Card/CardCalendario";
import { TituloAmarelo } from "../Textos/Textos";
import estilo from "./estiloDadosCalendario";


export default function DadosCalendario(props){

    function formatarData(value){
        var array = value.inicio.split('-')
        var adicional = ''
        console.log('ff ' + value.fim)
        if(value.fim!=null){
            var arrayFim = value.fim.split('-')
            adicional = ' à ' + arrayFim[2] + '/' + arrayFim[1]
        }
        return array[2] + '/' + array[1] + adicional
    }

    function lerDados(el){
        
        return <CardCalendario titulo={formatarData(el)} dados={el} />
    }

    function lerGrupo(el){
        return <View style={estilo.blocoMes}>
            <TituloAmarelo  conteudo={el.mes + '/' + el.ano}/>
                {el.content.map((element)=>lerDados(element))}
        </View>
    }

    return(
        <View style={estilo.container}>
            {props.dados.map(el => lerGrupo(el))}
        </View>
    );
}