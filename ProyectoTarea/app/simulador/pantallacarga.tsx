import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export default function PantallaCarga() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setCargando(false);
    }, 3000);

    return () => clearTimeout(temporizador);
  }, []);

  return (
    <View style={styles.container}>
      {cargando ? (
        <View style={styles.cajaCarga}>
          <ActivityIndicator size="large" color="#ffcc00" />
          <Text style={styles.textoCarga}>⏳ Cargando...</Text>
        </View>
      ) : (
        <Text style={styles.bienvenida}>🚀 ¡Bienvenido a la aplicación! 🎉</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e3c72",
  },
  cajaCarga: {
    alignItems: "center",
    padding: 25,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#ffcc00",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 5 },
    elevation: 6,
  },
  textoCarga: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#555",
    marginTop: 10,
  },
  bienvenida: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    padding: 20,
    backgroundColor: "#ff5733",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowOffset: { width: 3, height: 6 },
    elevation: 7,
  },
});
