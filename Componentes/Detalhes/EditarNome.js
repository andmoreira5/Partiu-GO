//componente para editar nome de usuário do aplicativo
import React, { useState, useContext } from "react";
import { View, Modal, StyleSheet } from "react-native";
import SubTitulo from "../Textos/SubTitulo";
import InputText from "../InputTexto/InputText";
import { BotaoConfirmacao } from "../Botao/Botao";
import estilo from "../SplashScreen/estilosSplash";
import { Text } from "react-native";
import { Context } from "../Contexto";
import * as SQLite from "expo-sqlite";
import { cores } from "../Configuracoes/Configuracoes";
import LottieView from "lottie-react-native";
import { useEffect } from "react";

export default function EditarNome() {
  const { nomeUsuario, setNomeUsuario } = useContext(Context);
  const [nomeExibido, setNomeExibido] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (nomeUsuario != "$0") {
      setNomeExibido(nomeUsuario);
    }
  }, []);

  async function confirmar() {
    var novoNome = "";
    if (nomeExibido == "") {
      setNomeUsuario("$0");
      novoNome = "$0";
    } else {
      setNomeUsuario(nomeExibido);
      novoNome = nomeExibido;
    }
    setModalVisible(true);
    const db = SQLite.openDatabase("database.db");

    db.transaction((tx) => {
      tx.executeSql("select * from usuario", [], (_, { rows: { _array } }) => {
        //tabela usuario indica os dados do usuário atual
        if (_array.length > 0) {
          tx.executeSql( "update usuario set nome where id = " + _array[0].id, [novoNome] );
          console.log('nome atualizado')
        } 
      });
    });
    setTimeout(() => {
      setModalVisible(false);
    }, 3000);
  }

  return (
    <View >
      <SubTitulo subTitulo="Alterar Nome" />
      <View
        style={[estilo.alinhamentoHorizontal, { justifyContent: "center" }]}
      >
        <InputText value={nomeExibido} onChangeText={setNomeExibido} />
        <BotaoConfirmacao title="OK" onPress={confirmar} />
      </View>
      <Text className="text-white text-sm font-bold text-center mb-10 opacity-80">
        (Ele aparece na tela inicial)
      </Text>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View className="items-center justify-center mt-28">
          <View style={styles.modalView}>
            <Text className='font-bold text-green-600 text-lg'>SUCESSO!</Text>
            <LottieView
              style={{ width: 180, height: 200 }}
              source={require("../../assets/confirmation.json")}
              autoPlay
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: cores.verde,
  },
});
