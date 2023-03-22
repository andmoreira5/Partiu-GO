//Essa é a primeira tela que aparece no aplicativo sendo primeira instalação ou não
//Aqui também faremos a conexão com o servidor pra ver se tem dado novo.

import React, { useEffect, useContext, useState } from "react";
import { View, Image } from "react-native";
import estilo from "./estilosSplash";
import { TituloSplash } from "../Textos/Textos";
import { Context } from "../Contexto";
import { server } from "../Servidor";
import { lerDiaDaSemana, lerDiaDeHoje } from "../FuncoesLogicas/LerHorarioDia";
import {
  buscarCalendario,
  buscarConselho,
  buscarFormacoes,
  buscarGruposDeHoje,
  buscarTemas,
} from "../Dados/Queries";
import { useNavigation } from "@react-navigation/native";
import { lerNomeUsuario } from "../FuncoesLogicas/LerDados";
import LottieView from "lottie-react-native";
import NetInfo from "@react-native-community/netinfo";
import { Dimensions } from "react-native";
import busca from "../Servidor/busca";
import * as SQLite from "expo-sqlite";
import client from "../Database/sanity";
import { grupos, tema } from "../Database/scritpsBusca";

export default function SplashBoasVindas() {
  const {
    setTemas,
    setGrupos,
    setFormacoes,
    setConselho,
    setNomeUsuario,
    setCalendario,
  } = useContext(Context);
  const navigation = useNavigation();
  const [animacao, setAnimacao] = useState(require("../../assets/cat.json"));
  const [textoAnimacao, setTextoAnimacao] = useState("Olá!");
  // const [estaConectado, setEstaConectado] = useState(true);
  // lerNomeUsuario();

  useEffect(() => {
    const  openDatabase = () => {
    
      const db = SQLite.openDatabase("database.db");
      db.transaction((tx) => {
        tx.executeSql(
          "create table if not exists usuario (id integer primary key not null, nome text);"
        ); //uso  0 (não usar digital), 1 (usar digital)        
      });
      
      db.transaction((tx) => {
        tx.executeSql(
          "select * from usuario",
          [],
          (_, { rows: { _array } }) => {
            //tabela usuario indica os dados do usuário atual
            if (_array.length > 0) {
              console.log('tem')
              //se tem registro
              console.log('tem')
              alert(_array[0].nome)
              // setTimeout(() => {
              //   navigation.navigate("Principal");
              // }, 5000);
            } else {
              console.log('n tem')
              // setTimeout(() => {
              //   navigation.navigate("SplashInicial01");
              // }, 5000);
            }
          }
        );
      });
    
    }
    openDatabase()
    buscarDados()

    NetInfo.fetch().then((state) => {
      if(state.isInternetReachable){
        setAnimacao(require("../../assets/cat.json"));
        setTextoAnimacao("Olá!");
        // buscarDados();
      }else{
        setAnimacao(require("../../assets/triste.json"));
        setTextoAnimacao("Pôxa, estamos sem internet!");
      }
    });
    
    return;

  }, []);

  const buscarDados = async () => {
    const dia = lerDiaDeHoje() 
    //buscando os temas
    client.fetch(tema, {dia}).then( data =>
      setTemas(data)
    )

      //buscando as informações dos grupos de oração
      client.fetch(grupos).then( data =>
        setGrupos(data)
      )

  }



    //   //busca dos dados de formação
    //   const responseFormatado = await busca(buscarFormacoes);
    //   var formacoes = [];
    //   responseFormatado.data.formacaos.data.map((item) => {
    //     var materiais = [];
    //     item.attributes.item.map((el) => {
    //       var objeto = {
    //         url: server + el.capa.data.attributes.url,
    //         titulo: el.titulo,
    //         descricao: el.descricao,
    //       };
    //       materiais.push(objeto);
    //     });
    //     var obj = {
    //       grupo: item.attributes.grupo,
    //       content: materiais,
    //     };
    //     formacoes.push(obj);
    //   });
    //   setFormacoes(formacoes);

    //   //busca dos dados de conselho
    //   const responseFormatadoConselho = await busca(buscarConselho);
    //   var conselho = [];
    //   responseFormatadoConselho.data.conselhos.data.map((item) => {
    //     var data = [];
    //     item.attributes.item.map((el) => {
    //       var objeto = {
    //         url: server + el.capa.data.attributes.url,
    //         titulo: el.titulo,
    //         descricao: el.descricao,
    //       };
    //       data.push(objeto);
    //     });
    //     var obj = {
    //       grupo: item.attributes.grupo,
    //       content: data,
    //     };
    //     conselho.push(obj);
    //   });
    //   setConselho(conselho);

    //   //busca dos dados de calendario
    //   const responseFormatadoCalendario = await busca(buscarCalendario, {
    //     day: lerDiaDeHoje(),
    //   });
    //   var calendario = [];
    //   responseFormatadoCalendario.data.calendarios.data.map((item) => {
    //     var data = [];
    //     item.attributes.Eventos.map((el) => {
    //       var objeto = {
    //         descricao: el.Descricao,
    //         inicio: el.Inicio,
    //         fim: el.Fim,
    //         endereco: el.Endereco,
    //         horario: el.Horario,
    //       };
    //       data.push(objeto);
    //     });
    //     var obj = {
    //       mes: item.attributes.Mes,
    //       ano: item.attributes.Ano,
    //       content: data,
    //     };
    //     calendario.push(obj);
    //   });
    //   setCalendario(calendario);
    // };

    
  // }, []);



  return (
    <View style={estilo.containerBoasVindas}>
      <Image
        style={estilo.logoBoasVindas}
        source={require("../../assets/logo.png")}
      />
      <View>
        <LottieView
          style={{ width: Dimensions.get("window").width * 0.8 }}
          source={animacao}
          autoPlay
          loop
        />
        <TituloSplash conteudo={textoAnimacao} />
      </View>
    </View>
  );
}
