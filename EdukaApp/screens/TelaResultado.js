import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import * as Progress from 'react-native-progress';

export default function TelaResultado({ navigation, route }) {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fontes/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fontes/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) return <View />;

  const { acertos = 0, total = 1 } = route.params || {};
  const progresso = acertos / total;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Parabéns, <Text style={styles.highlight}>Multimediano!</Text>
      </Text>

      <Progress.Circle
        size={140}
        progress={progresso}
        color="#FF6700"
        borderWidth={6}
        showsText={true}
        formatText={() => `${Math.round(progresso * 100)}%`}
        style={styles.progress}
      />

      <Text style={styles.subtitle}>
        Você acertou {acertos} de {total} perguntas! Continue explorando e aprendendo com a gente! 📚🎓
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quiz')}>
        <LinearGradient
          colors={['#FF6600', '#FFD700']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>Concluir</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FB',
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 50,
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  highlight: {
    color: '#FF6700',
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 60,
    color: '#17234D',
    paddingHorizontal: 20,
  },
  progress: {
    marginBottom: 20,
  },
  button: {
    width: '55%',
    height: 40,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
  },
  gradientButton: {
    width: '100%',
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
});
