import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Imagem/Ilustração */}
      <Image
        source={require('../assets/illustration.png')}
        style={styles.image}
        resizeMode="contain"
      />
      
      {/* Título */}
      <Text style={styles.title}>EDUKA</Text>
      
      {/* Subtítulo */}
      <Text style={styles.subtitle}>
        Explore todas as funções existentes com base no seu interesse e estudo principal
      </Text>
      
      {/* Botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.primaryButtonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Registro')}
        >
          <Text style={styles.secondaryButtonText}>Registrar</Text>
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
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F41BB',
    marginBottom: 60,
  },
  subtitle: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 90,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  primaryButton: {
    backgroundColor: '#1F41BB',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    flex: 1,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
