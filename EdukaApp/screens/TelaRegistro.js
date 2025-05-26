import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import api from '../api';

export default function TelaRegistro({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fontsLoaded] = useFonts({
      'Poppins-Regular': require('../assets/fontes/Poppins-Regular.ttf'),
      'Poppins-Bold': require('../assets/fontes/Poppins-Bold.ttf'),
    });
  
    if (!fontsLoaded) {
      return null;
    } 

  const handleRegister = async () => {
    try {
      const response = await api.post('/register', { name, email, password });

      Alert.alert('Sucesso', response.data.message || 'Conta criada com sucesso!');
      navigation.navigate('Bem-vindo');
    } catch (error) {
      Alert.alert(
        'Erro',
        error.response?.data?.message || 'Houve um erro ao criar a conta. Tente novamente.'
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      <Text style={styles.subtitle}>Crie uma conta, se não tem</Text>
      <Text style={styles.subtitle}>uma conta</Text>

      <TextInput placeholder="nome" value={name} onChangeText={setName}
        style={styles.input} placeholderTextColor="#FF6700"
      />

      <TextInput placeholder="email"  value={email} onChangeText={setEmail}
        style={styles.input} placeholderTextColor="#FF6700"
      />

      <TextInput placeholder="senha" value={password} onChangeText={setPassword}
        secureTextEntry
        style={styles.input} placeholderTextColor="#FF6700"
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <LinearGradient
                  colors={['#FF6600', '#FFD700']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.gradientButton}
                >
                <Text style={styles.buttonText}>Criar</Text>
                </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.alreadyHaveAccount}>Já tem uma conta?</Text>
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
    marginBottom: 25,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#8338EC',
    marginBottom: 5,
  },
  input: {
    marginTop:'20',
    width: '100%',
    height: 50,
    backgroundColor: '#F1F4FF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 9,
    borderWidth: 1,
    borderColor: '#8338EC',
    fontFamily: 'Poppins-Regular',
  },
  button: {
    backgroundColor: '#1F41BB',
    width: '100%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    elevation: 3,
    marginTop:'30',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  alreadyHaveAccount: {
    color: '#494949',
    marginTop: 10,
    fontSize: 14,
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