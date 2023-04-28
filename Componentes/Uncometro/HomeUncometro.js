import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useState, useEffect, useRef, useContext } from "react";
import LottieView from "lottie-react-native";
import { Context } from "../Contexto";

export default function HomeUncometro() {

    const { telaInicialUncometro, setTelaInicialUncometro } = useContext(Context)

  const [iniciando, setIniciando] = useState(true);
  const [conteudo, setConteudo] = useState({
    texto: "Para começar, toque o botao abaixo:",
    lottie: require("../../assets/fingerprint.json"),
  });
  const animationRef = useRef(null);

  const handleOnPress = () => {
    animationRef.current.play();
  };

  useEffect(() => {
    if (iniciando) {
      setConteudo({
        texto: "Para começar, toque o botao abaixo:",
        lottie: require("../../assets/fingerprint.json"),
      });
    } else {
      setConteudo({
        texto: "Analisando unção...",
        lottie: require("../../assets/verify.json"),
      });
      setTimeout(() => {
        setTelaInicialUncometro(!telaInicialUncometro)
      }, 3500);
    }
  }, [iniciando]);

  return (
    <View>
      <Text className="text-white font-bold text-base mx-4">
        {conteudo.texto}
      </Text>
      <TouchableOpacity
        onPress={() => {
          if (iniciando) {
            handleOnPress();
          }
        }}
      >
        <LottieView
          style={{ width: Dimensions.get("window").width * 0.8 }}
          ref={animationRef}
          source={conteudo.lottie}
          autoPlay={!iniciando}
          loop={!iniciando}
          speed={1.3}
          onAnimationFinish={() => {
            if (iniciando) {
              setIniciando(false);
            }
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
