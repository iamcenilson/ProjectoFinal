import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';

const temas = [
  { id: '1', titulo: 'Photoshop', icon: 'brush-outline' },
  { id: '2', titulo: 'Inkscape', icon: 'layers-outline' },
  { id: '3', titulo: 'Blender', icon: 'color-palette-outline' },
];

const TelaTM = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fontes/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fontes/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Image source={require('../assets/linear.png')} style={styles.bannerImage} />
        <View style={styles.bannerContent}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={24} color="#1F41BB" />
          </TouchableOpacity>
          <Text style={styles.bannerTitle}>Temas de Técnicas</Text>
          <Text style={styles.bannerTitle}>Multimédia</Text>
        </View>
        <Image source={require('../assets/ladoTM.png')} style={styles.sideImage} />
      </View>

      {/* Seção de tópicos */}
      <Text style={styles.sectionTitle}>Tópicos</Text>
      <ScrollView style={styles.topicsContainer} showsVerticalScrollIndicator={false}>
        {temas.map((tema) => (
          <TouchableOpacity 
            key={tema.id} 
            style={styles.topicCard} 
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Aula', { tema: tema.titulo })}
          >
            <View style={styles.iconCircle}>
              <Icon name={tema.icon} size={24} color="#17234D" />
            </View>
            <Text style={styles.topicTitle}>{tema.titulo}</Text>
            <Icon name="chevron-forward-outline" size={24} color="#17234D" />
          </TouchableOpacity>        
        ))}
      </ScrollView>

      {/* Rodapé */}
            <View style={styles.footer}>
              <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Quiz')}>
                <Image source={require('../assets/jogo.png')} style={styles.footerIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Menu')}>
                <Image source={require('../assets/home.png')} style={[styles.footerIcon, styles.activeIcon]} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Perfil')}>
                <Image source={require('../assets/user.png')} style={styles.footerIcon} />
              </TouchableOpacity>
            </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 1,
    paddingTop: 15,
  },
  bannerContainer: {
    height: 220,
    borderRadius: 25,
    overflow: 'hidden',
    position: 'relative',
    marginTop: 10,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bannerContent: {
    position: 'absolute',
    top: 0,
    left: 12,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  backButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  bannerTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
  sideImage: {
    width: 130,
    height: 120,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
    bottom: 40,
  },
  sectionTitle: {
    color: '#17234D',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginTop: 20,
    marginBottom: 10,
  },
  topicsContainer: {
    marginTop: 10,
  },
  topicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6FAFB',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  topicTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    flex: 1,
    color: '#17234D',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  footerButton: {
    padding: 10,
  },
  footerIcon: {
    width: 30,
    height: 30,
    tintColor: '#2E2E2E',
  },
});

export default TelaTM;
