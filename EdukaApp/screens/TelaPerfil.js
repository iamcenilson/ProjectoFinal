import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';

const TelaPerfil = ({ navigation }) => {
  const [usuario, setUsuario] = useState(null);

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fontes/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fontes/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    const carregarUsuario = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUsuario(JSON.parse(userData));
      }
    };
    carregarUsuario();
  }, []);

  if (!fontsLoaded || !usuario) {
    return null;
  }

  return (
    <ImageBackground source={require('../assets/perfil (1).png')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.profileContainer}>
            <Image source={require('../assets/foto.png')} style={styles.profileImage} />
          </View>

          <Text style={styles.name}>{usuario.name}</Text>
          <Text style={styles.email}>{usuario.email}</Text>

          {/* Aqui você pode ajustar os dados dos pontos e horas de estudo depois */}
          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Icon name="star" size={20} color="#fff" />
              <Text style={styles.statNumber}>{usuario.pontos || 0}</Text>
              <Text style={styles.statLabel}>Pontos</Text>
            </View>
            <View style={styles.statBox}>
              <Icon name="time-outline" size={20} color="#fff" />
              <Text style={styles.statNumber}>{usuario.horas_estudo || 0}</Text>
                <Text style={styles.statLabel}>Horas de Estudo</Text>
            </View>
          </View>

          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Sobre o Aplicativo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Eliminar Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={async () => {
                await AsyncStorage.removeItem('user');
                navigation.navigate('Login');
              }}
            >
              <Text style={[styles.menuText, styles.logout]}>Terminar Sessão</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    top: '0%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  profileContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: -50,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
  },
  name: {
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    marginTop: 25,
  },
  email: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#777',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#8338EC',
    padding: 16,
    borderRadius: 20,
    width: '100%',
    marginBottom: 25,
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#fff',
  },
  statLabel: {
    fontSize: 12,
    color: '#fff',
  },
  menu: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  menuText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#333',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  logout: {
    color: 'red',
    fontFamily: 'Poppins-Bold'
  },
});

export default TelaPerfil;
