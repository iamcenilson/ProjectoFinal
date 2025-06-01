import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';

export default function TelaResultado({ route, navigation }) {
  const [fontsLoaded] = useFonts({
      'Poppins-Regular': require('../assets/fontes/Poppins-Regular.ttf'),
      'Poppins-Bold': require('../assets/fontes/Poppins-Bold.ttf'),
    });

  const { acertos, total } = route.params;
  const [usuario, setUsuario] = useState(null);

  const percentual = (acertos / total) * 100;

  useEffect(() => {
    const carregarUsuario = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          const user = JSON.parse(userData);
          setUsuario(user);
        }
      } catch (error) {
        console.error('Erro ao carregar usuário:', error);
      }
    };

    carregarUsuario();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>
          Parabéns, <Text style={styles.destaque}>Multimediano!</Text>
        </Text>

        <Text style={styles.subtitulo}>
          Você concluiu o quiz com sucesso! Continue explorando e aprendendo com a gente! 🚀📚
        </Text>

        <Text style={styles.percentualTexto}>
          Acertos: {acertos} de {total} ({Math.round(percentual)}%)
        </Text>

        {/* Barra de progresso manual */}
        <View style={styles.barraContainer}>
          <View style={[styles.barraPreenchida, { width: `${percentual}%` }]} />
        </View>

        <TouchableOpacity
          style={styles.botao1}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Perfil')}
        >
          <Text style={styles.textoBotao}>Ver Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Quiz')}
        >
          <Text style={styles.textoBotao}>Concluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf0ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 30,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 10,
  },
  titulo: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#222',
    marginBottom: 12,
  },
  destaque: {
    color: '#f97316',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  percentualTexto: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#444',
    marginBottom: 10,
  },
  barraContainer: {
    fontFamily: 'Poppins-Bold',
    width: '100%',
    height: 16,
    backgroundColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 30,
  },
  barraPreenchida: {
    height: '100%',
    backgroundColor: '#f97316',
  },
   botao1: {
    backgroundColor: '#f97316',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 15,
  },
  botao: {
    backgroundColor: '#f97316',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  textoBotao: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    fontSize: 18,
  },
});
