import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { LinearGradient } from 'expo-linear-gradient';

export default function Inicio({ navigation }) {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Substitui o antigo expo-app-loading
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/boneco.png')} style={styles.image} resizeMode="contain" />
      
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>
          Olá <Text style={styles.boldText}>Multimediano!</Text>
          {'\n'}Bem-vindo ao <Text style={styles.appName}>EDUKA</Text>, o app feito a pensar em si,
        </Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Registro')}
        >
          <Text style={styles.registerText}>Cadastrar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <LinearGradient
            colors={['#FF8000', '#FFD700']}
            style={styles.loginGradient}
          >
            <Text style={styles.loginText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f7fb',
    padding: 20,
  },
  image: {
    width: 190,
    height: 490,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#4A4A4A',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  boldText: {
    fontFamily: 'Poppins_700Bold',
    color: '#FF8000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  registerButton: {
    borderWidth: 2,
    borderColor: '#FF8000',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginRight: 10,
  },
  registerText: {
    fontFamily: 'Poppins_700Bold',
    color: '#FF8000',
    fontSize: 18,
  },
  loginButton: {
    flex: 1,
    borderRadius: 30,
    overflow: 'hidden',
  },
  loginGradient: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
  },
  loginText: {
    fontFamily: 'Poppins_700Bold',
    color: '#fff',
    fontSize: 17,
  },
});

