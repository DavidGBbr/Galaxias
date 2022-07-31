import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaBuraco from './componentes/TelaBuraco';
import TelaGalaxias from './componentes/TelaGalaxias';
import TelaInicial from './componentes/TelaInicial';
import TelaPlanetas from './componentes/TelaPlanetas';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Tela Inicial' component={TelaInicial}/>
        <Stack.Screen name='Planetas' component={TelaPlanetas}/>
        <Stack.Screen name='Buraco Negro' component={TelaBuraco}/>
        <Stack.Screen name='Galáxias' component={TelaGalaxias}/>
      </Stack.Navigator>
    </NavigationContainer>
  )}
