//card com botão para enviar e-mail para o desenvolvedor
import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import SubTitulo from "../Textos/SubTitulo";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

export default function Extras() {
  const navigation = useNavigation();

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <SubTitulo subTitulo="Extras" />

      <TouchableOpacity
        onPress={()=>{navigation.navigate('Uncometro')}}
        className="border-white border-4 items-center justify-center mb-10 flex-row w-4/5 rounded-lg p-3 bg-red-700 "
      >
        <Icon name="flame-sharp" size={20} color="#fff" />
        <Text className='pl-4 text-white text-sm'>
          Unçômetro
        </Text>
        
      </TouchableOpacity>
    </View>
  );
}
