import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const temas = [
  { id: '1', titulo: 'Introdução Multimedia' },
  { id: '2', titulo: 'Fotografia Digital' },
  { id: '3', titulo: 'Comunicação Visual' },
  { id: '4', titulo: 'Princípios do Design' },
];

const TelaDCA = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Image source={require('../assets/linear.png')} style={styles.bannerImage} />
        <View style={styles.bannerContent}>
          <View style={styles.iconCircle}>
            <Icon name="time-outline" size={24} color="#17234D" />
          </View>
          <Text style={styles.bannerTitle}>Temas de DCA</Text>
        </View>
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
            <Icon name="color-palette-outline" size={24} color="#17234D" />
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
  iconCircle: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 13,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: '20'
  },
  sectionTitle: {
    color: '#17234D',
    fontSize: 16,
    fontWeight: 'bold',
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
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  topicTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
    color: '#17234D',
    marginLeft: 12,
  },
});

export default TelaDCA;
