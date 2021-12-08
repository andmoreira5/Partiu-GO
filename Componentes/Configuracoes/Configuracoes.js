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