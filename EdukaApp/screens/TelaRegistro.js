import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import api from '../api';

export default function TelaRegistro({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        style={styles.input}
      />

      <TextInput placeholder="email"  value={email} onChangeText={setEmail}
        style={styles.input1}
      />

      <TextInput placeholder="senha" value={password} onChangeText={setPassword}
        secureTextEntry
        style={styles.input2}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Criar</Text>
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
    fontWeight: 'bold',
    color: '#1F41BB',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F1F4FF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#1F41BB',
  },
  input1: {
    width: '100%',
    height: 50,
    backgroundColor: '#F1F4FF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  input2: {
    width: '100%',
    height: 50,
    backgroundColor: '#F1F4FF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1F41BB',
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  alreadyHaveAccount: {
    color: '#494949',
    marginTop: 10,
    fontSize: 14,
  },
});
