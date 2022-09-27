//É o quadro branco informando se tem grupo hoje ou não

import React, {useContext, useEffect} from "react";
import { Context } from '../Contexto'
import CardHojeNaoTemGrupo from "./CardHojeNaoTemGrupo";
import { useState } from "react";
import CardHojeTemGrupo from "./CardHojeTemGrupo";
import { ScrollView, View } from "react-native";
import { Text } from "react-native";


export default function CaixaDialogoGrupo(){
    const {temas, grupos} = useContext(Context)
    const [temGrupo, setTemGrupo] = useState(true)
    const [arrayParaExibir, setArrayParaExibir] = useState([])
    let titulo = 'HOJE TEM GRUPO DE ORAÇÃO'

    useEffect(()=>{
        if(temas.length==0 && grupos.length==0){
            titulo='HOJE NÃO TEM GRUPO!'
            setTemGrupo(false)
        }else{
            if(temas.length==0){
                setArrayParaExibir(grupos)
            }else{
                setArrayParaExibir(temas)
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
                    {arrayParaExibir.map((el) => {return <CardHojeTemGrupo item={el} />}) }
                    </ScrollView>
                </View>
                        :
                    <CardHojeNaoTemGrupo />
            }
        </>
    );
}