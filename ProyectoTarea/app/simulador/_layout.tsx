import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Button } from "react-native";

export default function SimuladorCarga() {
  const [cargando, setCargando] = useState(false);
  const [progreso] = useState(new Animated.Value(0)); // Usamos solo una instancia de Animated.Value

  // Simula el proceso de carga
  useEffect(() => {
    if (cargando) {
      Animated.timing(progreso, {
        toValue: 100,
        duration: 5000, // Tiempo de carga (5 segundos)
        useNativeDriver: false,
      }).start();
    }
  }, [cargando, progreso]); // Se agrega 'progreso' en la dependencia

  // Inicia el simulador de carga
  const iniciarCarga = () => {
    progreso.setValue(0); // Reinicia el progreso
    setCargando(true); // Activa el simulador de carga
  };

  // Interpolación para convertir el valor animado a un porcentaje
  const progresoInterpolado = progreso.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  // Suscribirse al valor del progreso para mostrar el porcentaje
  const [valorProgreso, setValorProgreso] = useState(0);

  useEffect(() => {
    const id = progreso.addListener(({ value }) => {
      setValorProgreso(Math.round(value)); // Actualiza el valor del progreso
    });

    // Limpia el listener cuando el componente se desmonte
    return () => progreso.removeListener(id);
  }, [progreso]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Simulador de Carga</Text>
      <Animated.View
        style={[
          styles.barraCarga,
          { width: progresoInterpolado }, // Usa la interpolación para ajustar el ancho
        ]}
      />
      {cargando ? (
        <Text style={styles.texto}>Cargando... {valorProgreso}%</Text> // Muestra el valor del progreso sin usar _value
      ) : (
        <Text style={styles.texto}>Pulsa para comenzar la carga.</Text>
      )}
      <Button title="Iniciar Carga" onPress={iniciarCarga} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  barraCarga: {
    height: 20,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    color: "#555",
  },
});
