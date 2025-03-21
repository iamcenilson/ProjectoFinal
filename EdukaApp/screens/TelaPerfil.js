import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TelaPerfil = ({navigation}) => {
  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <Image
          source={require('../assets/Ellipse 1.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Cenilson Canguila</Text>
      </View>

      
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
        <Icon name="star" size={20} color="#fff" style={styles.statIcon} />
          <Text style={styles.statNumber}>589</Text>
          <Text style={styles.statLabel}>Pontos</Text>
        </View>
        <View style={styles.statBox}>
        <Icon name="time-outline" size={20} color="#fff" style={styles.statIcon} />
          <Text style={styles.statNumber}>1h 39min</Text>
          <Text style={styles.statLabel}>Horas de Estudo</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    alignItems: 'center',
    marginTop: 55,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#007bff'
  },
  name: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 24,
    backgroundColor: '#1F41BB',
    padding: 16,
    borderRadius: 24.22,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 14,
    color: '#fff',
  },
  footerNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
    width: '110%',
  },
});

export default TelaPerfil;
