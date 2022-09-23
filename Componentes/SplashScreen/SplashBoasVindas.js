//Essa é a primeira tela que aparece no aplicativo sendo primeira instalação ou não
//Aqui também faremos a conexão com o servidor pra ver se tem dado novo.

import React, { useEffect, useContext } from 'react'
import { View, Image, ActivityIndicator} from 'react-native'
import estilo from './estilosSplash'
import { TituloSplash } from '../Textos/Textos'
import { Context } from '../Contexto'
import urlServidor from '../Servidor'
import { lerDiaDaSemana, lerDiaDeHoje } from '../FuncoesLogicas/LerHorarioDia'
import { buscarGruposDeHoje, buscarTemas } from '../Dados/Queries'
import { useNavigation } from '@react-navigation/native';
import { lerDado } from '../FuncoesLogicas/LerDados'
import LottieView from 'lottie-react-native';


export default function SplashBoasVindas (){
  const {setTemas, setNomeUsuario, setGrupos} = useContext(Context)
  const navigation = useNavigation()

  let tela = 'Principal'
  var nome = lerDado('id')
  setNomeUsuario(nome)
  console.log(nome + '//')
  if(nome==''){
    tela = 'SplashInicial01'
  }

  useEffect(()=>{

    const buscarDados = async () => {
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
      setTimeout(()=>{
        navigation.navigate(tela)
        // console.log(tela)
      }, 5000)
      
    }
    buscarDados()
  
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