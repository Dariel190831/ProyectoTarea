import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡Bienvenido!</Text>
      <Text style={styles.subtitulo}>Esta es la pantalla principal de la aplicación.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitulo: {
    fontSize: 18,
    color: '#777',
  },
});
