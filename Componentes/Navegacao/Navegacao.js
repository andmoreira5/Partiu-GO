import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Home/Home';
import Conselho from '../Conselho/Conselho';

export default function Navegacao(){
    
    const Drawer = createDrawerNavigator();
    
    return(
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Conselho" component={Conselho} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}