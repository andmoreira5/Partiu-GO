//É o quadro branco informando se tem grupo hoje ou não

import React, {useContext, useEffect} from "react";
import { Context } from '../Contexto'
import CardHojeNaoTemGrupo from "./CardHojeNaoTemGrupo";
import { useState } from "react";
import CardHojeTemGrupo from "./CardHojeTemGrupo";
import { ScrollView, View } from "react-native";
import { Text } from "react-native";
import { lerDiaDaSemana } from "../FuncoesLogicas/LerHorarioDia";


export default function CaixaDialogoGrupo(){
    const {temas, grupos} = useContext(Context)
    const [temGrupo, setTemGrupo] = useState(true)
    const [arrayParaExibir, setArrayParaExibir] = useState([])
    const [dadoParaVisualizar, setDadoParaVisualizar] = useState('')
    let titulo = 'HOJE TEM GRUPO DE ORAÇÃO'

    useEffect(()=>{
        var grupoDeHoje = []
        var hoje = lerDiaDaSemana()
        grupos?.map((el) => {
            if(el.diaDaSemana  == hoje){
                grupoDeHoje.push(item)
            }
        })

        if(temas.length==0 && grupoDeHoje.length==0){
            titulo='HOJE NÃO TEM GRUPO!'
            setTemGrupo(false)
        }else{
            if(temas.length==0){
                setArrayParaExibir(grupoDeHoje)
                setDadoParaVisualizar('grupos')
            }else{
                var temaDeHoje = []
                temas?.map((el) => {
                    var item = {
                        tema: el.tema,
                        nome: el.grupo.nome,
                        local: el.grupo.local,
                        endereco: el.grupo.endereco,
                        horario: el.grupo.horario,
                    }
                    temaDeHoje.push(item)
                })
                setArrayParaExibir(temaDeHoje)
            }
        }
    }, [])
    
    
    return(
        <>
            {
                temGrupo ?
                <View style={{height:260}}>
                    <Text style={{textAlign:'center', fontWeight:'bold', fontSize:17, borderBottomColor:'white', borderBottomWidth:2, marginBottom:15, paddingBottom:5}}>HOJE TEM GRUPO DE ORAÇÃO</Text>
                    <ScrollView horizontal={true}>
                    {arrayParaExibir.map((el, index) => {return <CardHojeTemGrupo item={el} key={index} />}) }
                    </ScrollView>
                </View>
                        :
                    <CardHojeNaoTemGrupo />
            }
        </>
    );
}