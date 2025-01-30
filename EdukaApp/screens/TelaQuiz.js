import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function TelaQuiz() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.circle}>
          <Text style={styles.quizText}>QUIZ</Text>
        </View>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>DCA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>TÉCNICAS MULTIMÉDIA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAF6',
  },
  header: {
    flex: 1,
    backgroundColor: '#3F51B5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quizText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3F51B5',
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#EDE7F6',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#512DA8',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
