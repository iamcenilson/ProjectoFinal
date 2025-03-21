import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const temas = [
  { id: '1', titulo: 'Introdução Multimedia', icon: 'film-outline' },
  { id: '2', titulo: 'Fotografia Digital', icon: 'camera-outline' },
  { id: '3', titulo: 'Comunicação Visual', icon: 'image-outline' },
  { id: '4', titulo: 'Princípios do Design', icon: 'color-palette-outline' },
];

const TelaDCA = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Image source={require('../assets/linear2.png')} style={styles.bannerImage} />
        <View style={styles.bannerContent}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={24} color="#0CF574" />
          </TouchableOpacity>
          <Text style={styles.bannerTitle}>Temas de Design</Text>
          <Text style={styles.bannerTitle}>e Comunicação</Text>
          <Text style={styles.bannerTitle}>Audiovisual</Text>
        </View>
        <Image source={require('../assets/ladoDCA.png')} style={styles.sideImage} />
      </View>

      {/* Seção de tópicos */}
      <Text style={styles.sectionTitle}>Tópicos</Text>
      <ScrollView style={styles.topicsContainer} showsVerticalScrollIndicator={false}>
        {temas.map((tema) => (
          <TouchableOpacity 
            key={tema.id} 
            style={styles.topicCard} 
            activeOpacity={0.7}
            onPress={() => navigation.navigate('DCAAula', { tema: tema.titulo })}
          >
            <View style={styles.iconCircle}>
              <Icon name={tema.icon} size={24} color="#17234D" />
            </View>
            <Text style={styles.topicTitle}>{tema.titulo}</Text>
            <Icon name="chevron-forward-outline" size={24} color="#17234D" />
          </TouchableOpacity>        
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  bannerContainer: {
    height: 175,
    borderRadius: 15,
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
    marginBottom: 10,
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
    backgroundColor: '#F8F9FF',
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
});

export default TelaDCA;
