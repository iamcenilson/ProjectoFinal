import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './screens/Inicio'
import TelaBemVindo from './screens/TelaBemVindo';
import TelaCurso from './screens/TelaCurso';
import TelaLogin from './screens/TelaLogin';
import TelaRegistro from './screens/TelaRegistro';
import TelaPerfil from './screens/TelaPerfil';
import MenuPrincipal from './screens/MenuPrincipal';
import TelaQuiz from './screens/TelaQuiz';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
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
          name="Curso" 
          component={TelaCurso} 
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
