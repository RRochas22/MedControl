import { Image, StyleSheet, Platform, Text, TouchableOpacity, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>
        Olá, João
      </Text>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>
          Pacientes
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>
          Farmácia
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>
          Dúvidas
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8FAF8',
    padding: 35,
    },

    nome: {
      color: '#56AB91',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      marginTop: 40
    },

    card: {
      backgroundColor: '#56AB91',
      padding: 20,
      borderRadius: 20,
      marginBottom: 40,
      height: '13%'
    },

    cardText: {
      fontSize: 18,
      color: '#FFF',
      fontWeight: 'bold'
    }
  });
