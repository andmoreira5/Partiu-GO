import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Home/Home';
import Conselho from '../Conselho/Conselho';
import dadosConselho from '../Dados/Conselho';
import dadosFormacoes from '../Dados/Formacoes'
import DadosComFoto from '../Conselho/DadosComFoto';

export default function Navegacao(){
    
    const Drawer = createDrawerNavigator();
    
    return(
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Conselho" component={() => <Conselho titulo={"Conselho da Cidade"} dados={<DadosComFoto dados={dadosConselho} />}/>} />
                <Drawer.Screen name="Formações" component={() => <Conselho titulo={"Processo Formativo"} dados={<DadosComFoto dados={dadosFormacoes}/>}/>} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}