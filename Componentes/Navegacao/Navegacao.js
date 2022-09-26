import React from 'react'
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Home/Home';
import Conselho from '../Conselho/Conselho';
import dadosConselho from '../Dados/Conselho';
import dadosFormacoes from '../Dados/Formacoes'
import dadosCalendario from '../Dados/Calendario'
import DadosComFoto from '../Conselho/DadosComFoto';
import DadosCalendario from '../Conselho/DadosCalendario';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default function Navegacao(){
    
    const Drawer = createDrawerNavigator();
    const Tab = createMaterialBottomTabNavigator();

    
    return(
        <>
        <StatusBar
        animated={true}
        // backgroundColor="#61dafb"
        barStyle={'light-content'}
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        // hidden={hidden}
         />
        <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: 'tomato',  }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          barStyle={{paddingBottom:50}}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Conselho"
          component={() => <Conselho titulo={"Conselho da Cidade"} dados={<DadosComFoto dados={dadosConselho} />}/>}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        /> */}
      </Tab.Navigator>
      </>
        // <NavigationContainer independent={true}>
        //     <Drawer.Navigator initialRouteName='Home'>
        //         <Drawer.Screen name="Home" component={Home} />
        //         <Drawer.Screen name="Conselho" component={() => <Conselho titulo={"Conselho da Cidade"} dados={<DadosComFoto dados={dadosConselho} />}/>} />
        //         <Drawer.Screen name="Formações" component={() => <Conselho titulo={"Processo Formativo"} dados={<DadosComFoto dados={dadosFormacoes}/>}/>} />
        //         <Drawer.Screen name="Calendário" component={() => <Conselho titulo="Calendário" dados={<DadosCalendario dados={dadosCalendario}/>}/>}/>
        //     </Drawer.Navigator>
        // </NavigationContainer>
    );
}