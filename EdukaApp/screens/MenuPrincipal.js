import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
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

const carouselImages = [
  require('../assets/Slide 1.png'),
  require('../assets/Slide 2.png'),
  require('../assets/Slide 3.png'),
];

const { width } = Dimensions.get('window');

const MenuPrincipal = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fontes/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fontes/Poppins-Bold.ttf'),
  });

  const scrollViewRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % carouselImages.length;
      setIndex(nextIndex);
      scrollViewRef.current?.scrollTo({ x: nextIndex * width, animated: true });
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Olá Bem-Vindo ao</Text>
          <Text style={styles.userName}>EDUKA</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Image source={require('../assets/Perfil.png')} style={styles.profileImage} />
        </TouchableOpacity>
      </View>

      {/* Carrossel automático */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        style={styles.carouselContainer}
      >
        {carouselImages.map((img, idx) => (
          <Image key={idx} source={img} style={styles.carouselImage} />
        ))}
      </ScrollView>

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
    lineHeight: 18,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  carouselContainer: {
  width: width,
  height: 140,
  alignSelf: 'center',
  marginTop: 10,
  marginBottom: 0,
},
 carouselImage: {
  width,
  height: 180,
  resizeMode: 'cover',
  borderRadius: 25,
},
  disciplinesContainer: {
  marginTop: 5,
  paddingHorizontal: 12,
  flexGrow: 0,
  flexShrink: 1,
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
    marginBottom: 15,
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
