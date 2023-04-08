//Essa é a primeira tela que aparece no aplicativo sendo primeira instalação ou não
//Aqui também faremos a conexão com o servidor pra ver se tem dado novo.

import React, { useEffect, useContext, useState } from "react";
import { View, Image, StatusBar, Dimensions } from "react-native";
import estilo from "./estilosSplash";
import { TituloSplash } from "../Textos/Textos";
import { Context } from "../Contexto";
import { lerDiaDeHoje } from "../FuncoesLogicas/LerHorarioDia";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import NetInfo from "@react-native-community/netinfo";
import * as SQLite from "expo-sqlite";
import client from "../Database/sanity";
import {
  calendario,
  conselho,
  formacoes,
  grupos,
  tema,
} from "../Database/scritpsBusca";

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
    return Object.values(
      data.reduce((acumulador, obj) => {
        if (!acumulador[obj.grupo]) {
          acumulador[obj.grupo] = {
            grupo: obj.grupo,
            dados: [],
          };
        }
        acumulador[obj.grupo].dados.push(obj);
        return acumulador;
      }, {})
    );
  };

  const buscarDados = async () => {
    const dia = lerDiaDeHoje();
    //buscando os temas
    client.fetch(tema, { dia }).then((data) => setTemas(data));

    client.fetch(formacoes).then((data) => {
      var dadosOrganizados = organizarDados(data);
      // Ordena o array de objetos pelo grupo em ordem decrescente
      dadosOrganizados.sort((a, b) => b.grupo.localeCompare(a.grupo));

      // Ordena cada objeto "dados" pelo valor da propriedade "ordem" em ordem crescente
      dadosOrganizados.forEach((obj) => {
        obj.dados.sort((a, b) => a.ordem - b.ordem);
      });

      setFormacoes(dadosOrganizados);
    });

    client.fetch(conselho).then((data) => {
      var dadosOrganizados = organizarDados(data);
      function compare(a, b) {
        // Compara os grupos
        if (a.grupo < b.grupo) {
          return 1;
        }
        if (a.grupo > b.grupo) {
          return -1;
        }

        // Se os grupos são iguais, compara os nomes em ordem crescente
        if (a.nome < b.nome) {
          return -1;
        }
        if (a.nome > b.nome) {
          return 1;
        }

        return 0;
      }

      // Ordena o JSON
      dadosOrganizados.forEach((item) => {
        item.dados.sort(compare);
      });

      dadosOrganizados.sort(compare);
      setConselho(dadosOrganizados);
    });

    client.fetch(calendario, { dia }).then((data) => {
      const moment = require("moment");
      require("moment/locale/pt-br");

      moment.locale("pt-br");

      // Ordene a lista de eventos pela data de início
      data.sort((a, b) => moment(a.inicio).diff(moment(b.inicio)));

      // Crie um objeto vazio para armazenar os eventos ordenados por mês/ano
      const eventosPorMesAno = {};

      // Percorra a lista de eventos ordenada e agrupe-os por mês/ano no objeto criado anteriormente
      for (const evento of data) {
        const mesAno = moment(evento.inicio)
          .locale("pt-br")
          .format("MMMM/YYYY");
        if (!eventosPorMesAno[mesAno]) {
          eventosPorMesAno[mesAno] = [];
        }
        eventosPorMesAno[mesAno].push(evento);
      }

      // Crie um array de objetos para representar o resultado final, ordenando as chaves do objeto eventosPorMesAno de forma crescente
      const resultado = Object.keys(eventosPorMesAno)
        .sort((a, b) => moment(a, "MMMM/YYYY").diff(moment(b, "MMMM/YYYY")))
        .map((mesAno) => ({
          mes: mesAno.toUpperCase(),
          dados: eventosPorMesAno[mesAno].sort((a, b) =>
            moment(a.inicio).diff(moment(b.inicio))
          ),
        }));
      setCalendario(resultado);

    });

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
      <StatusBar backgroundColor="#f2f2f2" barStyle='dark-content' />
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
