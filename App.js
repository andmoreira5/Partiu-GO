import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SplashInicial from './Componentes/SplashScreen/SplashInicial';

export default function App() {
  return (
    <View style={styles.container}>
      <SplashInicial />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
