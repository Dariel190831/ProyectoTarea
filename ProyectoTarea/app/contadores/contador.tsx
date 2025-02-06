import { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated, Alert } from "react-native";

export default function ContadorScreen() {
  const [contador, setContador] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current; // Animación con useRef

  const [alertShown, setAlertShown] = useState(false); // Estado para controlar la alerta

  // useEffect que maneja la lógica cuando el contador cambia
  useEffect(() => {
    if (contador % 5 === 0 && contador !== 0 && !alertShown) {
      setAlertShown(true); // Marca la alerta como mostrada

      // Animación para mostrar el mensaje
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();

      // Muestra la alerta
      Alert.alert("Aviso", "¡Ha alcanzado un múltiplo de 5!", [
        {
          text: "OK",
          onPress: () => {
            // Restaura el estado de alerta después de que el usuario la cierre
            setAlertShown(false);
          },
        },
      ]);

      // Después de 1.5 segundos, oculta el mensaje con otra animación
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 1500);
    }
  }, [contador, alertShown]); // Se ejecuta cada vez que cambia el contador o alertShown

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.texto}>Contador</Text>
        <Text style={styles.contador}>{contador}</Text>

        {/* Botón para incrementar el contador */}
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setContador(prev => prev + 1)} // Se usa prev para mantener la consistencia
          activeOpacity={0.7}
        >
          <Text style={styles.botonTexto}>+1</Text>
        </TouchableOpacity>

        {/* Mensaje animado que aparece cuando se alcanza un múltiplo de 5 */}
        <Animated.Text style={[styles.mensaje, { opacity: fadeAnim }]}>
          🎉 ¡Múltiplo de 5 alcanzado! 🎉
        </Animated.Text>
      </View>
    </View>
  );
}

// Estilos mejorados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4B79A1", // Fondo azul
  },
  card: {
    width: "85%",
    backgroundColor: "#FFF",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 5 },
    elevation: 8,
  },
  texto: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  contador: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#007BFF",
    marginBottom: 20,
  },
  boton: {
    backgroundColor: "#FF5733",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 50,
  },
  botonTexto: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  mensaje: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#28A745", // Verde para el mensaje
  },
});
