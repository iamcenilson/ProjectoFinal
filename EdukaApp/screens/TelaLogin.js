import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import api from '../api';


export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        style={styles.input}
      />

      <TextInput placeholder="Senha" value={password} onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
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
    fontWeight: 'bold',
    color: '#FFA706',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#8338EC',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F1F4FF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#8338EC',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPassword: {
    color: '#FFA706',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#FFA706',
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccount: {
    color: '#494949',
    marginTop: 10,
  },
});
