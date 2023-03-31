import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import ContainerDados from "../Conselho/ContainerDados";
import Home from "../Home/Home";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Context } from "../Contexto";
import { View, StyleSheet, StatusBar, Alert } from "react-native";
import React, {  useState, useContext } from "react";
import { cores } from "../Configuracoes/Configuracoes";
import Detalhes from "../Detalhes/Detalhes";

const Tab = createBottomTabNavigator()

const Tabs = () => {
    const [iconHom, setIconHom] = useState([styles.iconTabRound, 'home'])
    const [iconFormacoes, setIconFormacoes] = useState(['', 'book-outline'])
    const [iconConselho, setIconConselho] = useState(['', 'account-outline'])
    const {formacoes, conselho, calendario} = useContext(Context)
    const [iconCalendario, setIconCalendario] = useState(['', 'calendar-outline'])
    const [iconDetalhes, setIconDetalhes] = useState(['', 'cat'])
    
    return(
        <>
            <StatusBar barStyle={"light-content"} translucent={true} backgroundColor={'transparent'} />
            <Tab.Navigator 
            
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                "tabBarActiveTintColor": cores.laranja,
                "tabBarInactiveTintColor": "#777",
                "tabBarShowLabel": true,
                "tabBarStyle": [
                    {
                    "display": "flex"
                    },
                    null
                ],
                tabBarStyle:{borderTopColor:cores.laranja, borderTopWidth:3},
                tabBarIcon: ({ color, size }) => {
                    let iconName, estilo = '';
                    switch (route.name) {
                        case 'Home':
                            iconName = iconHom[1];
                            estilo = iconHom[0]
                            break;
                        case 'Conselho':
                            iconName = iconConselho[1];
                            estilo = iconConselho[0]
                            break;
                        case 'Formações':
                            iconName = iconFormacoes[1];
                            estilo = iconFormacoes[0]
                            break;
                        case 'Eventos':
                            iconName = iconCalendario[1]
                            estilo = iconCalendario[0]
                            break;
                        case 'Detalhes':
                            iconName = iconDetalhes[1]
                            estilo = iconDetalhes[0]
                            break;
                        default:
                            iconName = 'circle';
                            break;
                    }
        
                    return (
                        <View>
                            <View  style={estilo} >
                                <Icon name={iconName} size={size} color={color}/>
                            </View>
                        </View>
                    );
                },headerTransparent:true, headerTintColor:'transparent', 
            })}>
                <Tab.Screen name="Formações" 
                 listeners={{
                    tabPress: (e) =>{
                        setIconFormacoes([styles.iconTabRound, 'book'])
                    },
                    blur: (e) =>{
                        setIconFormacoes(['', 'book-outline'])
                    }
                }} 
                children={() => <ContainerDados titulo={"Processo Formativo"} dados={formacoes} isCalendario={false}/>}  />

            <Tab.Screen
                listeners={{
                    tabPress: (e) =>{
                        setIconCalendario([styles.iconTabRound, 'calendar'])
                    },
                    blur: (e) =>{
                        setIconCalendario(['', 'calendar-outline'])
                    }
                }} 
                name="Eventos" children={() => <ContainerDados titulo={"Calendário"} dados={calendario}  isCalendario={true}/>} />

                <Tab.Screen  listeners={{
                    tabPress: (e) =>{
                        setIconHom([styles.iconTabRound, 'home'])
                    },
                    blur: (e) =>{
                        setIconHom(['', 'home-outline'])
                    }
                }}  name="Home" component={Home} />

                <Tab.Screen
                listeners={{
                    tabPress: (e) =>{
                        setIconConselho([styles.iconTabRound, 'account'])
                    },
                    blur: (e) =>{
                        setIconConselho(['', 'account-outline'])
                    }
                }} 
                name="Conselho" children={() => <ContainerDados titulo={"Conselho RCC Missão Velha"} dados={conselho}  isCalendario={false}/>} />
            
            <Tab.Screen
                listeners={{
                    tabPress: (e) =>{
                        setIconDetalhes([styles.iconTabRound, 'cat'])
                    },
                    blur: (e) =>{
                        setIconDetalhes(['', 'cat'])
                    }
                }} 
                name="Detalhes" component={Detalhes} />
            
            
            </Tab.Navigator>

            
        </>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconTabRound: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        backgroundColor:'#fff',
        borderColor:cores.laranja,
        borderWidth:3
    },
});

export default Tabs

