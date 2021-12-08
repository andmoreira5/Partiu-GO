import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashInicial from './Componentes/SplashScreen/SplashInicial';
import SplashInicial02 from './Componentes/SplashScreen/SplashInicial02';



const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{
                headerShown: false
            }}>
                <AppStack.Screen name="SplashInicial01" component={SplashInicial} />
                <AppStack.Screen name="SplashInicial02" component={SplashInicial02} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;