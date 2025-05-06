import React, {} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useFonts } from 'expo-font';

const disciplines = [
  {
    id: '1',
    title: 'Design e Comunicação Audiovisual',
    image: require('../assets/DCA.png'),
    screen: 'DCA'
  },
  {
    id: '2',
    title: 'Técnicas Multimédia',
    image: require('../assets/TM.png'),
    screen: 'TM'
  },
];

const MenuPrincipal = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fontes/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fontes/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Olá Bem-Vindo</Text>
          <Text style={styles.userName}>EDUKA</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
            <Image source={require('../assets/Perfil.png')} style={styles.profileImage} />
        </TouchableOpacity>

      </View>

      {/* Introdução ao Eduka */}
      <Image source={require('../assets/eduka.png')} style={styles.introImage} />

      {/* Seção de Disciplinas */}
      <View style={styles.disciplinesContainer}>
        <Text style={styles.sectionTitle}>Disciplinas</Text>
        
        <FlatList
          data={disciplines}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.disciplineCard} 
              onPress={() => navigation.navigate(item.screen)}
            >
              <Image source={item.image} style={styles.disciplineImage} />
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        {/* Jogo */}
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Quiz')}>
          <Image source={require('../assets/jogo.png')} style={styles.footerIcon} />
        </TouchableOpacity>

        {/* Home */}
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/home.png')} style={[styles.footerIcon, styles.activeIcon]} />
        </TouchableOpacity>

        {/* Usuário */}
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
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  userName: {
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
    color: '#6A1B9A',
    lineHeight: '18'
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  introImage: {
    width: 390,
    alignSelf: 'center',
    height: 190,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  disciplinesContainer: {
    marginTop: 10,
    paddingHorizontal: 16,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#6A1B9A',
    marginBottom: 9,
  },
  disciplineCard: {
    width: 235,
    height: 265,
    borderRadius: 15,
    overflow: 'hidden',
    marginRight: 18,
},
  disciplineImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
  activeIcon: {
    tintColor: '#FFA500',
  },
});

export default MenuPrincipal;
