import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SplashInicial from './Componentes/SplashScreen/SplashInicial';
import {
  setCustomText,
} from 'react-native-global-props';


export default function App() {


  const customTextProps = {
    style: {
      fontSize: 20,
      fontFamily: 'Lato Regular',
      color: 'white'
    }
  };

  setCustomText(customTextProps);

  return (
    <View style={styles.container}>
      {setCustomText}
      <SplashInicial />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
});
