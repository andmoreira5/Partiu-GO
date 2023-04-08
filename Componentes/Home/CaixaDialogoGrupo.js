//É o quadro branco informando se tem grupo hoje ou não

import React, { useContext, useEffect } from "react";
import { Context } from "../Contexto";
import CardHojeNaoTemGrupo from "./CardHojeNaoTemGrupo";
import { useState } from "react";
import CardHojeTemGrupo from "./CardHojeTemGrupo";
import { ScrollView, View } from "react-native";
import { Text } from "react-native";
import { lerDiaDaSemana } from "../FuncoesLogicas/LerHorarioDia";

export default function CaixaDialogoGrupo() {
  const { temas, grupos } = useContext(Context);
  const [temGrupo, setTemGrupo] = useState(true);
  const [arrayParaExibir, setArrayParaExibir] = useState([]);
  const [dadoParaVisualizar, setDadoParaVisualizar] = useState("");
  let titulo = "HOJE TEM GRUPO DE ORAÇÃO";

  useEffect(() => {
    var grupoDeHoje = [];
    var hoje = lerDiaDaSemana();
    grupos?.map((el) => {
      if (el.diaDaSemana == hoje) {
        grupoDeHoje.push(el);
      }
    });

    if (temas.length == 0 && grupoDeHoje.length == 0) {
      titulo = "HOJE NÃO TEM GRUPO!";
      setTemGrupo(false);
    } else {
      if (temas.length == 0) {
        setArrayParaExibir(grupoDeHoje);
        setDadoParaVisualizar("grupos");
      } else {
        var temaDeHoje = [];
        temas?.map((el) => {
          var item = {
            tema: el.tema,
            nome: el.grupo.nome,
            local: el.grupo.local,
            endereco: el.grupo.endereco,
            horario: el.grupo.horario,
          };
          temaDeHoje.push(item);
        });

        temaDeHoje.forEach(tema => {
          for (let i = 0; i < grupoDeHoje.length; i++) {
            if (tema.nome === grupoDeHoje[i].nome) {
              grupoDeHoje.splice(i, 1);
            }
          }
        });
        grupoDeHoje.forEach(grupo => {
          grupo.tema = 'Sem tema';
        });

        temaDeHoje = temaDeHoje.concat(grupoDeHoje)

        setArrayParaExibir(temaDeHoje);
      }
    }
  }, []);

  return (
    <>
      {temGrupo ? (
        <View style={{ height: 310 }}>
          <Text className="text-center font-bold text-white border-b-2 border-white mb-4 pb-4 text-lg">
            HOJE TEM GRUPO DE ORAÇÃO{'\n'}EM MISSÃO VELHA - CE
          </Text>
          <ScrollView horizontal={true}>
            {arrayParaExibir.map((el, index) => {
              return <CardHojeTemGrupo item={el} key={index} />;
            })}
          </ScrollView>
        </View>
      ) : (
        <CardHojeNaoTemGrupo />
      )}
    </>
  );
}
