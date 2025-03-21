import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

export default function TelaResultado({ navigation }) {
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../assets/fontes/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../assets/fontes/Poppins-Bold.ttf'),
      });
    
      if (!fontsLoaded) {
        return null;
      }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/taça.png')} style={styles.trophyImage} />

      <Text style={styles.title}>Parabéns, <Text style={styles.highlight}>Multimediano!</Text> 🎉</Text>
      <Text style={styles.subtitle}>Você concluiu o quiz com sucesso! Continue explorando e aprendendo com a gente! 📚🎓</Text>
      
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
    marginBottom: 80,
    color: '#17234D'
  },
  trophyImage: {
    marginTop: 40,
    width: 203,
    height: 168,
    resizeMode: 'contain',
    marginBottom: 100,
  },
  button: {
    backgroundColor: '#FFA706',
    width: '55%',
    height: 40,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  gradientButton: {
    width: '100%',
    height: 50,
    borderRadius: 15, 
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
