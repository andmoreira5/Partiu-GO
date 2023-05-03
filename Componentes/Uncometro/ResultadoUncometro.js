import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Context } from "../Contexto";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Audio } from 'expo-av'

const ResultadoUncometro = () => {
  const [mensagem, setMensagem] = useState("Aguardando resultado...");
  const [progress, setProgress] = useState(Math.round(Math.random() * 100));
  // const [progress, setProgress] = useState(100);
  const [value, setValue] = useState(0)
  const { setTelaInicialUncometro } = useContext(Context);
  const [sound, setSound] = useState();


  async function playSound() {
    var sound, msg = ''
    if(progress >= 0 && progress < 10){
       sound  = (await Audio.Sound.createAsync( require('../../assets/audio/03_na_tua_cara.mp3') )).sound;
       msg = "Arriégua! Tá mais frio que pé de anjo!\nDeixe de preguiça de rezar!\nSua oração pessoal tá muito afolozada!"
    }else if(progress >= 10 && progress < 20){
      sound  = (await Audio.Sound.createAsync( require('../../assets/audio/02_cascudo.mp3') )).sound;
      msg = "Valei-me meu padim Ciço!\nSua vida espiritual tá muito coisada!\nMerecendo uns cascudos de Padre Pio!"
    }else if(progress >= 20 && progress < 30){
      sound  = (await Audio.Sound.createAsync( require('../../assets/audio/03_na_tua_cara.mp3') )).sound;
      msg = "Tá se achando lampião da unção,\nmas o negócio tá ruim pra tu!\nPrecisa rezar melhor o terço!"
    }else if(progress >= 30 && progress < 40){
      sound  = (await Audio.Sound.createAsync( require('../../assets/audio/04_to_passado.mp3') )).sound;
      msg = "Hora de criar vergonha na cara e se converter!\nHora de fazer uma boa confissão!"
    }else if(progress >= 40 && progress < 50){
      sound  = (await Audio.Sound.createAsync( require('../../assets/audio/04_to_passado.mp3') )).sound;
      msg = "Tu abre do oi porque tá na mornidão!\nMande pra baixa da égua\nseu pecado de estimação!"
    }else if(progress >= 50 && progress < 60){
      sound  = (await Audio.Sound.createAsync( require('../../assets/audio/02_cascudo.mp3') )).sound;
      msg = "Ô bichim(a)!\nPrecisa rebolar no mato\nessa preguiça de estudar o Catecismo!"
    }else if(progress >= 60 && progress < 70){
      sound  = (await Audio.Sound.createAsync( require('../../assets/audio/05_to_bege2.mp3') )).sound;
      msg = "Falando muito miolo de pote!\nPrecisa falar mais de Jesus!"
    }else if(progress >= 70 && progress < 80){
      sound  = (await Audio.Sound.createAsync( require('../../assets/audio/09_kibunitinhoag.mp3') )).sound;
      msg='Tu tá acima da média, mas cuidado\npra não findar virando uma geleira!\nParticipe da Missa mais vezes!'
    }else if(progress >= 80 && progress < 90){
      sound  = (await Audio.Sound.createAsync( require('../../assets/audio/09_kibunitinhoag.mp3') )).sound;
      msg='Pelo visto, a alma tá toda emperiquitada!\nCheio da unção!\nViva ainda mais as virtudes dos santos.'
    }else if(progress >= 90 && progress <= 100){
      sound  = (await Audio.Sound.createAsync( require('../../assets/audio/05_to_bege2.mp3') )).sound;
      msg='Eita que pessoa arretada!\nQuando dei fé, já ia era derreter esse aparelho.\nMuita unção!'
    }
    setMensagem(msg)
    setSound(sound);
    await sound.playAsync();
  }


  const getColorForPercentage = (percentage) => {
    var r, g, b;
    if (percentage < 50) {
      r = 255;
      g = Math.round(5.1 * percentage);
    } else {
      g = 255;
      r = Math.round(510 - 5.1 * percentage);
    }
    b = 0;
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  return (
    <View className="items-center justify-center h-full">
      <Text className="text-white text-xl mb-5">Seu nível de unção é:</Text>
    
      <AnimatedCircularProgress
              size={170}
              width={18}
              duration={7000}
              backgroundWidth={15}
              rotation={0}
              backgroundColor="#777"
              fill={progress}
              arcSweepAngle={360}
              tintColor={getColorForPercentage(value)}
              padding={10}
              onAnimationComplete={playSound}
            >
              {(num) => (
                <>
                  <Text  className='text-white text-3xl font-bold' >
                    {setValue(num)}
                    {Math.round(num)}%
                  </Text>
                </>
              )}
            </AnimatedCircularProgress>
      <Text className="text-white m-7 text-center text-sm">{mensagem}</Text>

      <TouchableOpacity 
      onPress={()=>{
        setMensagem('Aguardando resultado...')
        setTelaInicialUncometro(true)
      }}
      className="bg-gray-600 p-5 m-5 rounded-2xl">
        <Text className="text-white">REFAZER TESTE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultadoUncometro;
