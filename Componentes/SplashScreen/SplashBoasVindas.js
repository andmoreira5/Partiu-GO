//Essa é a primeira tela que aparece no aplicativo sendo primeira instalação ou não
//Aqui também faremos a conexão com o servidor pra ver se tem dado novo.

import React, { useEffect, useContext } from 'react'
import { View, Image, ActivityIndicator} from 'react-native'
import estilo from './estilosSplash'
import { TituloSplash } from '../Textos/Textos'
import { Context } from '../Contexto'
import urlServidor, { server } from '../Servidor'
import { lerDiaDaSemana, lerDiaDeHoje } from '../FuncoesLogicas/LerHorarioDia'
import { buscarFormacoes, buscarGruposDeHoje, buscarTemas } from '../Dados/Queries'
import { useNavigation } from '@react-navigation/native';
import { lerDado } from '../FuncoesLogicas/LerDados'
import LottieView from 'lottie-react-native';


export default function SplashBoasVindas (){
  const {setTemas, setNomeUsuario, setGrupos, setFormacoes} = useContext(Context)
  const navigation = useNavigation()

  let tela = 'Principal'
  var nome = lerDado('id')
  setNomeUsuario(nome)
  if(nome==''){
    tela = 'SplashInicial01'
  }

  useEffect(()=>{

    const buscarDados = async () => {
      //busca dos temas
      const response = await fetch(urlServidor, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: buscarTemas,
          variables: {
            day: lerDiaDeHoje(),
          },
        }),
      })
      const result = await response.json()
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
    const resp = await fetch(urlServidor, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: buscarGruposDeHoje,
        variables: {
          day: lerDiaDaSemana(),
        },
      }),
    })
    const res = await resp.json()
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
    const respFormacoes = await fetch(urlServidor, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: buscarFormacoes,
      }),
    })
    const responseFormatado = await respFormacoes.json()
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
        grupoFormativo: item.attributes.grupo,
        apostilas: materiais
       }
       formacoes.push(obj)
     
    })
    setFormacoes(formacoes)
    console.log(formacoes)

   
    }
    buscarDados()
    setTimeout(()=>{
      if(nome==''){
        tela = 'SplashInicial01'
      }
      navigation.navigate(tela)
    }, 5000)
    
  
  }, [])

  return(
    <View style={estilo.containerBoasVindas}>
      <Image  style={estilo.logoBoasVindas} source={require('../../assets/logo.png')}  />
      <TituloSplash>Carregando...</TituloSplash>
      <View >
            <LottieView style={estilo.aviao}  source={require('../../assets/cat.json')} autoPlay loop />
            <TituloSplash conteudo={'Olá!'} />
        </View>
    </View>
  )
        
}