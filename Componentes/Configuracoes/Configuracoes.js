// Esse arquivo traz as configurações especificas desse app
import {
    setCustomText,
  } from 'react-native-global-props';

export function confFontes(){
    const customTextProps = {
        style: {
          fontSize: 20,
          color: 'white'
        }
      };
    
      setCustomText(customTextProps);
}

export const cores= {
    laranja: '#ef5a34',
    cinza : '#4d4d4d', 
    amarelo: '#f2e3ba',
    marrom: '#62514d',
    verde: '#007e3e',
    tom1Detalhes:'#BA5232',
    tom2Detalhes:'#DB8064',
    tom3Detalhes:'#AE5D44'
}
