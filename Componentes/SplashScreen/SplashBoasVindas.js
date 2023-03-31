//Essa é a primeira tela que aparece no aplicativo sendo primeira instalação ou não
//Aqui também faremos a conexão com o servidor pra ver se tem dado novo.

import React, { useEffect, useContext, useState } from "react";
import { View, Image } from "react-native";
import estilo from "./estilosSplash";
import { TituloSplash } from "../Textos/Textos";
import { Context } from "../Contexto";
import { lerDiaDeHoje } from "../FuncoesLogicas/LerHorarioDia";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import NetInfo from "@react-native-community/netinfo";
import { Dimensions } from "react-native";
import * as SQLite from "expo-sqlite";
import client from "../Database/sanity";
import { conselho, formacoes, grupos, tema } from "../Database/scritpsBusca";

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
  var telaParaNavegar;
  // const [estaConectado, setEstaConectado] = useState(true);
  // lerNomeUsuario();

  useEffect(() => {
    const openDatabase = () => {
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
              setNomeUsuario(_array[0].nome);
              telaParaNavegar = "Principal";
            } else {
              telaParaNavegar = "SplashInicial01";
            }
          }
        );
      });
    };
    openDatabase();
    buscarDados();

    NetInfo.fetch().then((state) => {
      if (state.isInternetReachable) {
        setAnimacao(require("../../assets/cat.json"));
        setTextoAnimacao("Olá!");
        // buscarDados();
      } else {
        setAnimacao(require("../../assets/triste.json"));
        setTextoAnimacao("Pôxa, estamos sem internet!");
      }
    });

    return;
  }, []);

  const organizarDados = (data) => {
    return Object.values(data.reduce((acumulador, obj) => {
      if (!acumulador[obj.grupo]) {
        acumulador[obj.grupo] = {
          grupo: obj.grupo,
          dados: []
        };
      }
      acumulador[obj.grupo].dados.push(obj);
      return acumulador;
    }, {}));
  }

  const buscarDados = async () => {
    const dia = lerDiaDeHoje();
    //buscando os temas
    client.fetch(tema, { dia }).then((data) => setTemas(data))

    client.fetch(formacoes).then((data) => { setFormacoes(organizarDados(data)) })
    
    client.fetch(conselho).then((data) => { setConselho(organizarDados(data)) })

    //buscando as informações dos grupos de oração
    client.fetch(grupos).then((data) => {
      setGrupos(data);

      setTimeout(() => {
        navigation.navigate(telaParaNavegar);
      }, 5000);
    });
  };

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
