//card com botão para enviar e-mail para o desenvolvedor
import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import SubTitulo from "../Textos/SubTitulo";
import Card from "../Card/Card";
import { cores } from "../Configuracoes/Configuracoes";
import Icon from "react-native-vector-icons/Ionicons";

export default function FaleComigo(props) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <SubTitulo subTitulo="Dúvidas / Sugestões" />

      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            "mailto:and.moreira5@gmail.com?subject=App Partiu Grupo de Oração"
          )
        }
        style={{ backgroundColor: cores.verde }}
        className="border-white border-4 items-center justify-center mb-10 flex-row w-4/5 rounded-lg p-3 "
      >
        <Icon name="chatbubbles" size={20} color="#fff" />
        <Text className='pl-4 text-white text-sm'>
          Fale com o desenvolvedor
        </Text>
        
      </TouchableOpacity>
      <Text className='mb-10 text-center text-white -mt-4'>ANDERSON MOREIRA{'\n'}Analista de Tecnologia da Informação</Text>
      {/* <Card  img={{uri: props.dadosImagem.url}} titulo={props.dadosImagem.nome} descricao={props.dadosImagem.descricao} /> */}
    </View>
  );
}
