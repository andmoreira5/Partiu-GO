//Essa é a primeira tela que aparece no aplicativo sendo primeira instalação ou não
//Aqui também faremos a conexão com o servidor pra ver se tem dado novo.

import React, { useEffect, useContext } from 'react'
import { View, Image, ActivityIndicator} from 'react-native'
import estilo from './estilosSplash'
import { TituloSplash } from '../Textos/Textos'
import { Context } from '../Contexto'
import urlServidor, { server } from '../Servidor'
import { lerDiaDaSemana, lerDiaDeHoje } from '../FuncoesLogicas/LerHorarioDia'
import { buscarCalendario, buscarConselho, buscarFormacoes, buscarGruposDeHoje, buscarTemas } from '../Dados/Queries'
import { useNavigation } from '@react-navigation/native';
import { lerDado, lerNomeUsuario } from '../FuncoesLogicas/LerDados'
import LottieView from 'lottie-react-native';
import { useState } from 'react'
import NetInfo from "@react-native-community/netinfo"
import { Dimensions } from 'react-native'


export default function SplashBoasVindas (){
  const {setTemas, setGrupos, setFormacoes, setConselho, nomeUsuario, setCalendario} = useContext(Context)
  const navigation = useNavigation()
  const [tela, setTela] = useState('Principal')
  const [animacao, setAnimacao] = useState(require('../../assets/cat.json'))
  const [textoAnimacao, setTextoAnimacao] = useState('Olá!')
  const [estaConectado, setEstaConectado] = useState(true)


  lerNomeUsuario()
  useEffect(()=>{
     
    if(nomeUsuario=='' || typeof nomeUsuario=="undefined"){
      setTela('SplashInicial01')
    }else{
      setTela('Principal')
    }
  }, [nomeUsuario])


  useEffect(()=>{
    // axios
    //   .post(server+'/auth/local', {
    //     identifier: 'and.moreira5@outlook.com',
    //     password: 'Aa123456',
    //   })
    //   .then(response => {
    //     console.log('User profile', response.data.user);
    //     console.log('User token', response.data.jwt);
    //   })
    //   .catch(error => {
    //     console.log('An error occurred:', error.response);
    //   });

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
        grupo: item.attributes.grupo,
        content: materiais
       }
       formacoes.push(obj)
     
    })
    setFormacoes(formacoes)


    //busca dos dados de conselho
    const respConselho = await fetch(urlServidor, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: buscarConselho,
      }),
    })
    const responseFormatadoConselho = await respConselho.json()
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
    const respCalendario = await fetch(urlServidor, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: buscarCalendario,
        variables: {
          day: lerDiaDeHoje(),
        },
      }),
    })
    const responseFormatadoCalendario = await respCalendario.json()
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

    console.log(calendario)

   
    }

    NetInfo.fetch().then(state => {
      setEstaConectado(state.isInternetReachable)
    });
    if(estaConectado){
      setAnimacao(require('../../assets/cat.json'))
      setTextoAnimacao('Olá!')
      buscarDados()
      setTimeout(()=>{
        navigation.navigate(tela)
      }, 5000)
    }else{
      setAnimacao(require('../../assets/triste.json'))
      setTextoAnimacao('Pôxa, estamos sem internet!')
    }

    
    
  
  }, [])

  return(
    <View style={estilo.containerBoasVindas}>
      <Image  style={estilo.logoBoasVindas} source={require('../../assets/logo.png')}  />
      {/* <TituloSplash conteudo='Carregando...'></TituloSplash> */}
      <View >
            <LottieView style={{width:Dimensions.get('window').width*0.8}}  source={animacao} autoPlay loop />
            <TituloSplash conteudo={textoAnimacao} />
        </View>
    </View>
  )
        
}