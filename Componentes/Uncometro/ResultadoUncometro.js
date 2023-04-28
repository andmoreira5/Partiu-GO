import React, { useState, useEffect, useContext } from "react";
import { Animated, View, Text, TouchableOpacity } from "react-native";
import { ProgressCircle } from "react-native-svg-charts";
import { Context } from "../Contexto";

const AnimatedProgressCircle = Animated.createAnimatedComponent(ProgressCircle);

const ResultadoUncometro = () => {
  const [mensagem, setMensagem] = useState("");
  const [velocidadeLabel, setVelocidadeLabel] = useState(0)
  const [count, setCount] = useState(0);
//   const [progress, setProgress] = useState((Math.random() * 1).toFixed(2));
  const [progress, setProgress] = useState(0.81);
  const { setTelaInicialUncometro } = useContext(Context);
  const [animatedProgress, setAnimatedProgress] = useState(
    new Animated.Value(0)
  );
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 100);
  }, []);

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: progress,
      duration: 2000,
      useNativeDriver: false,
    }).start();

    if (progress >= 0 && progress < 0.1) {
      setMensagem(
        "Arriégua! Tá mais frio que pé de anjo!\nSeu caso tá ruim!\nSua oração pessoal tá muito afolozada!"
      );
      setVelocidadeLabel(100)
    } else if (progress >= 0.1 && progress < 0.2) {
      setMensagem(
        "Valei-me meu padim Ciço!\nGeladeira viva!\nMerecendo uns tabefes de Padre Pio!"
      );
      setVelocidadeLabel(80)
    } else if (progress >= 0.2 && progress < 0.3) {
      setMensagem(
        "Tá se achando cheio da unção,\nmas o negócio tá ruim pra tu!\nPrecisa rezar melhor o terço!"
      );
      setVelocidadeLabel(30)
    } else if (progress >= 0.3 && progress < 0.4) {
      setMensagem(
        "Tá na hora de criar vergonha na cara e se converter!\nHora de fazer uma boa confissão!"
      );
      setVelocidadeLabel(5)
    } else if (progress >= 0.4 && progress < 0.5) {
      setMensagem("Tu abre do oi porque tá na mornidão!\n");
      setVelocidadeLabel(0.5)
    }else if(progress >=0.5 && progress < 0.6){
        setVelocidadeLabel(0)
    }
  }, [progress]);

  const interpolatedColor = animatedProgress.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(255,0,0)", "rgb(0,255,0)"],
  });

  const interpolatedLabel = animatedProgress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0', '100'],
  });
  const [fadeAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < progress * 100) {
        setCount(count + 1);
      }
    }, velocidadeLabel );

    return () => clearInterval(interval);
  }, [count]);

  return (
    <View className="items-center justify-center h-full">
      <Text className="text-white text-xl mb-5">Seu nível de unção é:</Text>
      <View className="relative">
        <AnimatedProgressCircle
          style={{ height: 200, width: 200 }}
          progress={animatedProgress}
          progressColor={interpolatedColor}
          strokeWidth={10}
          backgroundColor="#ccc"
          cornerRadius={100}
        />
        <Text className="absolute self-center text-center top-20 text-4xl text-gray-300">
          {count}%
        </Text>
      </View>
      <Text className="text-white m-7 text-center">{mensagem}</Text>

      <TouchableOpacity 
      onPress={()=>setTelaInicialUncometro(true)}
      className="bg-gray-600 p-5 m-5 rounded-2xl">
        <Text className="text-white">REFAZER TESTE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultadoUncometro;
