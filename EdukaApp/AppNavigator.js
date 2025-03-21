import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './screens/Inicio'
import TelaBemVindo from './screens/TelaBemVindo';
import TelaVideo from './screens/TelaVideo';
import TelaLogin from './screens/TelaLogin';
import TelaRegistro from './screens/TelaRegistro';
import TelaPerfil from './screens/TelaPerfil';
import MenuPrincipal from './screens/MenuPrincipal';
import TelaQuiz from './screens/TelaQuiz';
import TelaTM from './screens/TelaTM';
import TelaDCA from './screens/TelaDCA';
import TelaAulaTM from './screens/TelaAulaTM';
import TelaVideoTM from './screens/TelaVideoTM';
import TelapdfTM from './screens/TelapdfTM';
import TelaAulaDCA from './screens/TelaAulaDCA';
import TelaPdfDCA from './screens/TelaPdfDCA';
import Eduka from './screens/Eduka';
import TelaPerguntas from './screens/TelaPerguntas';
import TelaResultado from './screens/TelaResultado';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">

      <Stack.Screen 
          name="Intro" 
          component={Eduka} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Inicio" 
          component={Inicio} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={TelaLogin} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Registro" 
          component={TelaRegistro} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Bem-vindo" 
          component={TelaBemVindo} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Menu" 
          component={MenuPrincipal} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="Aula" 
          component={TelaVideo} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="Perfil" 
          component={TelaPerfil} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Quiz" 
          component={TelaQuiz} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="TM" 
          component={TelaTM} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="DCA" 
          component={TelaDCA} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="TelaAula" 
          component={TelaAulaTM} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="VideoTM" 
          component={TelaVideoTM} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Pdf" 
          component={TelapdfTM} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="DCAAula" 
          component={TelaAulaDCA} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="PDF" 
          component={TelaPdfDCA} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="Perguntas" 
          component={TelaPerguntas} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="Resultado" 
          component={TelaResultado} 
          options={{ headerShown: false }} 
        />
      

      </Stack.Navigator>
    </NavigationContainer>
  );
}
