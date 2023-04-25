import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashInicial from './Componentes/SplashScreen/SplashInicial';
import SplashInicial02 from './Componentes/SplashScreen/SplashInicial02';
import SplashBoasVindas from './Componentes/SplashScreen/SplashBoasVindas'
import Tabs from './Componentes/Navegacao/Tabs';
import Uncometro from './Componentes/Uncometro/Uncometro';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{
                headerShown: false, 
            }}>
                <AppStack.Screen name="SplashBoasVindas"  component={SplashBoasVindas} />
                <AppStack.Screen name="SplashInicial01" component={SplashInicial} />
                <AppStack.Screen name="SplashInicial02" component={SplashInicial02} />
                <AppStack.Screen name="Principal"  component={Tabs} />
                <AppStack.Screen name="Uncometro" component={Uncometro}  />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;