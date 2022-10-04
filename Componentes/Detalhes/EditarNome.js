//componente para editar nome de usuário do aplicativo
import React, { useState, useContext } from "react";
import { View, Modal, StyleSheet, Pressable } from "react-native";
import SubTitulo from "../Textos/SubTitulo";
import InputText from '../InputTexto/InputText'
import { BotaoConfirmacao } from "../Botao/Botao";
import estilo from "../SplashScreen/estilosSplash";
import { Text } from "react-native";
import { Context } from "../Contexto";
import { gravarDado } from "../FuncoesLogicas/LerDados";
import { cores } from "../Configuracoes/Configuracoes";
import LottieView from 'lottie-react-native'

export default function EditarNome(){
    const {nomeUsuario, setNomeUsuario} = useContext(Context)
    const [nomeExibido, setNomeExibido] = useState(nomeUsuario)
    const [modalVisible, setModalVisible] = useState(false);

    function confirmar(){
        if(nomeExibido==''){
            setNomeUsuario('$0')
            gravarDado('id', '$0')
        }else{
            setNomeUsuario(nomeExibido)
            gravarDado('id', nomeExibido)
        }
        setModalVisible(true)
        setTimeout(()=>{
            setModalVisible(false)
        }, 3000)
    }


    return(
        <View>
            <SubTitulo subTitulo='Alterar Nome' />
            <View style={[estilo.alinhamentoHorizontal, {justifyContent:'center', }]}>
                <InputText value={nomeExibido}  onChangeText={setNomeExibido} />
                <BotaoConfirmacao title='OK' onPress={confirmar}/>
            </View>
            <Text style={{ color:'#fffb',  fontSize:15, fontWeight:'bold',  textAlign:'center', marginBottom:40, }}>(Ele aparece na tela inicial)</Text>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>SUCESSO!</Text>
                    <LottieView style={{width:180, height:200}} source={require('../../assets/confirmation.json')} autoPlay  />
                                    
                </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding:30,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
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
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      color:cores.verde
    }
  });