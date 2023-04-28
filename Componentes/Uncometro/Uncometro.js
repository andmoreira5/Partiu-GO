import { View, Text } from "react-native";
import React, { useContext } from "react";
import HomeUncometro from "./HomeUncometro";
import { Context } from "../Contexto";
import ResultadoUncometro from "./ResultadoUncometro";

export default function Uncometro() {
  const { telaInicialUncometro } = useContext(Context);

  return (
    <View className="bg-gray-900 h-full">
      <View className="h-1/5 bg-gray-600">
        <Text className=" text-white font-bold text-2xl pt-20 pb-3 w-full text-center  ">
          UNÇÔMETRO
        </Text>
      </View>
      <View className=" h-4/5 w-full items-center justify-center  ">
        {telaInicialUncometro ? <HomeUncometro /> : <ResultadoUncometro />}
      </View>
    </View>
  );
}
