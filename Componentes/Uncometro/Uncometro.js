import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import LottieView from "lottie-react-native";

export default function Uncometro() {
  const [iniciando, setIniciando] = useState(true);
  const [telaInicial, setTelaInicial] = useState(true);
  const [nivelUncao, setNivelUncao] = useState(0)
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
      setTimeout(()=>{
        setNivelUncao(Math.floor(Math.random() * 101))
        setTelaInicial(false)
    }, 5000)
    
    }
  }, [iniciando]);

  return (
    <View className="bg-gray-900 h-full">
      <View className="h-1/5 bg-gray-600">
        <Text className=" text-white font-bold text-2xl pt-20 pb-3 w-full text-center  ">
          UNÇÔMETRO
        </Text>
      </View>
      <View className=" h-4/5 w-full items-center justify-center  ">
        {telaInicial ? (
          <>
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
                    if(iniciando){
                        setIniciando(false);
                    }
                }}
              />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text className='text-white'>Seu nível de unção é:</Text>
          </>
        )}
      </View>
    </View>
  );
}
