import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import Conselho from "../Conselho/Conselho";
import Home from "../Home/Home";
import Icon from 'react-native-vector-icons/Ionicons';
import { Context } from "../Contexto";
import { View, StyleSheet, StatusBar, Alert } from "react-native";
import React, {  useState, useContext } from "react";
import { cores } from "../Configuracoes/Configuracoes";

const Tab = createBottomTabNavigator()


// }, [])
const Tabs = () => {
    const [iconHom, setIconHom] = useState([styles.iconTabRound, 'home'])
    const [iconFormacoes, setIconFormacoes] = useState(['', 'book-outline'])
    const [iconConselho, setIconConselho] = useState(['', 'person-outline'])
    const {formacoes, conselho, calendario} = useContext(Context)
    const [iconCalendario, setIconCalendario] = useState(['', 'calendar-outline'])
    
    return(
        <>
            <StatusBar barStyle={"light-content"} translucent={true} backgroundColor={'transparent'} />
            <Tab.Navigator 
            
            initialRouteName="Home"
            screenOptions={({ route }) => ({
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
                        case 'Formacoes':
                            iconName = iconFormacoes[1];
                            estilo = iconFormacoes[0]
                            break;
                        case 'Eventos':
                            iconName = iconCalendario[1]
                            estilo = iconCalendario[0]
                            break;
                        case 'Settings':
                            iconName = 'settings';
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
            })}
            
                tabBarOptions={{
                    activeTintColor: cores.laranja,
                    inactiveTintColor: '#777',
                    showLabel: true,
                    
            }}
            >
                <Tab.Screen name="Formacoes" 
                 listeners={{
                    tabPress: (e) =>{
                        setIconFormacoes([styles.iconTabRound, 'book'])
                    },
                    blur: (e) =>{
                        setIconFormacoes(['', 'book-outline'])
                    }
                }} 
                children={() => <Conselho titulo={"Processo Formativo"} dados={formacoes} isCalendario={false}/>}  />

            <Tab.Screen
                listeners={{
                    tabPress: (e) =>{
                        setIconCalendario([styles.iconTabRound, 'calendar'])
                    },
                    blur: (e) =>{
                        setIconCalendario(['', 'calendar-outline'])
                    }
                }} 
                name="Eventos" children={() => <Conselho titulo={"Calendário"} dados={calendario}  isCalendario={true}/>} />

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
                        setIconConselho([styles.iconTabRound, 'person'])
                    },
                    blur: (e) =>{
                        setIconConselho(['', 'person-outline'])
                    }
                }} 
                name="Conselho" children={() => <Conselho titulo={"Conselho da Cidade"} dados={conselho}  isCalendario={false}/>} />
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

