import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

export default function TelaDCA({ navigation }) {
  return (
    <View style={styles.container}>
      
      {/*Botões*/}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={styles.primaryButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}