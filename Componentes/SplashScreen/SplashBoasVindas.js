//Essa é a primeira tela que aparece no aplicativo sendo primeira instalação ou não
//Aqui também faremos a conexão com o servidor pra ver se tem dado novo.

import React, { useEffect, useContext } from 'react'
import { View, Image} from 'react-native'
import estilo from './estilosSplash'
import { TituloSplash } from '../Textos/Textos'
import { Context } from '../Contexto'
import { server } from '../Servidor'
import { lerDiaDaSemana, lerDiaDeHoje } from '../FuncoesLogicas/LerHorarioDia'
import { buscarCalendario, buscarConselho, buscarFormacoes, buscarGruposDeHoje, buscarTemas } from '../Dados/Queries'
import { useNavigation } from '@react-navigation/native';
import {  lerNomeUsuario } from '../FuncoesLogicas/LerDados'
import LottieView from 'lottie-react-native';
import { useState } from 'react'
import NetInfo from "@react-native-community/netinfo"
import { Dimensions } from 'react-native'
import busca from '../Servidor/busca'
import AsyncStorage  from '@react-native-async-storage/async-storage';



export default function SplashBoasVindas (){
  const {setTemas, setGrupos, setFormacoes, setConselho, nomeUsuario, setNomeUsuario, setCalendario} = useContext(Context)
  const navigation = useNavigation()
  const [animacao, setAnimacao] = useState(require('../../assets/cat.json'))
  const [textoAnimacao, setTextoAnimacao] = useState('Olá!')
  const [estaConectado, setEstaConectado] = useState(true)
  lerNomeUsuario()

  useEffect(()=>{
    async function getData(){
      const response =  await AsyncStorage.getItem('id');
      var tela
      if(response !== null && response!=='' ){
        tela='Principal'
      }else{
        tela='SplashInicial01'
      }
      if(estaConectado){
        setTimeout( ()=>{
            navigation.navigate(tela)
        }, 5000)
      }
    }
    getData()
  }, [])

  useEffect(()=>{    
   
    const buscarDados = async () => {
      //busca dos temas
      const result = await busca(buscarTemas, {day: lerDiaDeHoje() })
      var temas = []
      result.data.temas.data.map(item => {
      var obj = {
        tema: item.attributes.tema,
        dia: item.attributes.dia,
        grupo: item.attributes.grupo.data.attributes.nome,
        local: item.attributes.grupo.data.attributes.local,
        endereco: item.attributes.grupo.data.attributes.endereco,
        horario: item.attributes.grupo.data.attributes.horario
      }
      temas.push(obj)
    })
    setTemas(temas)

    //busca dados dos grupos de oração
    const res = await busca(buscarGruposDeHoje, { day: lerDiaDaSemana() })
    var grupos = []
    res.data.grupos.data.map(item => {
      var obj = {
        grupo: item.attributes.nome,
        local: item.attributes.local,
        endereco: item.attributes.endereco,
        horario: item.attributes.horario
      }
      grupos.push(obj)
    })
    setGrupos(grupos)

    //busca dos dados de formação
    const responseFormatado = await busca(buscarFormacoes)
    var formacoes = []
    responseFormatado.data.formacaos.data.map(item => {
      
       var materiais = []
       item.attributes.item.map((el)=>{
        var objeto = {
          url: server + el.capa.data.attributes.url,
          titulo:  el.titulo,
          descricao:  el.descricao
        }
        materiais.push(objeto)
        
     })
       var obj = {
        grupo: item.attributes.grupo,
        content: materiais
       }
       formacoes.push(obj)
     
    })
    setFormacoes(formacoes)


    //busca dos dados de conselho
    const responseFormatadoConselho = await busca(buscarConselho)
    var conselho = []
    responseFormatadoConselho.data.conselhos.data.map(item => {
      
       var data = []
       item.attributes.item.map((el)=>{
        var objeto = {
          url: server + el.capa.data.attributes.url,
          titulo:  el.titulo,
          descricao:  el.descricao
        }
        data.push(objeto)
        
     })
       var obj = {
        grupo: item.attributes.grupo,
        content: data
       }
       conselho.push(obj)
     
    })
    setConselho(conselho)


    //busca dos dados de calendario
    const responseFormatadoCalendario = await busca(buscarCalendario, { day: lerDiaDeHoje() })
    var calendario = []
    responseFormatadoCalendario.data.calendarios.data.map(item => {
      
       var data = []
       item.attributes.Eventos.map((el)=>{
        var objeto = {
          descricao: el.Descricao,
          inicio:  el.Inicio,
          fim:  el.Fim,
          endereco: el.Endereco,
          horario: el.Horario
        }
        data.push(objeto)
        
     })
       var obj = {
        mes: item.attributes.Mes,
        ano: item.attributes.Ano,
        content: data
       }
       calendario.push(obj)
     
    })
    setCalendario(calendario)
   
    }

    NetInfo.fetch().then(state => {
      setEstaConectado(state.isInternetReachable)
    });
    if(estaConectado){
      setAnimacao(require('../../assets/cat.json'))
      setTextoAnimacao('Olá!')
      buscarDados()
      
    }else{
      setAnimacao(require('../../assets/triste.json'))
      setTextoAnimacao('Pôxa, estamos sem internet!')
    }

  }, [])

  return(
    <View style={estilo.containerBoasVindas}>
      <Image  style={estilo.logoBoasVindas} source={require('../../assets/logo.png')}  />
      <View >
            <LottieView style={{width:Dimensions.get('window').width*0.8}}  source={animacao} autoPlay loop />
            <TituloSplash conteudo={textoAnimacao} />
        </View>
    </View>
  )
        
}