import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import api from '../api';

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fontes/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fontes/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleLogin = async () => {
    try {
      const response = await api.post('/login', { email, password });
      Alert.alert('Sucesso', response.data.message);
      navigation.navigate('Menu');
    } catch (error) {
      Alert.alert('Erro', error.response?.data?.message || 'Algo deu errado.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sessão</Text>
      <Text style={styles.subtitle}>Bem-vindo de volta</Text>

      <TextInput placeholder="Email" value={email} onChangeText={setEmail}
        style={styles.input} placeholderTextColor="#FF6700"
      />

      <TextInput placeholder="Senha" value={password} onChangeText={setPassword}
        secureTextEntry
        style={styles.input} placeholderTextColor="#FF6700"
      />

      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <LinearGradient
          colors={['#FF6600', '#FFD700']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
        >
        <Text style={styles.buttonText}>Entrar</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <Text style={styles.createAccount}>Criar uma nova conta</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#FF6700',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#8338EC',
    marginBottom: 70,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F1F4FF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#8338EC',
    fontFamily: 'Poppins-Regular',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPassword: {
    color: '#FF6700',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    backgroundColor: '#FFA706',
    width: '100%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  createAccount: {
    color: '#494949',
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
  },
  gradientButton: {
    width: '100%',
    height: 50,
    borderRadius: 20, 
    alignItems: 'center',
    justifyContent: 'center',
  },  
});
