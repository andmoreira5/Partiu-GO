import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  setCustomText,
} from 'react-native-global-props';
import SplashInicial02 from './Componentes/SplashScreen/SplashInicial02';


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
      <SplashInicial02 />
        
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
