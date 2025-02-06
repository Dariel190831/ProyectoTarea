import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";

export default function RegistrationScreen() {
    // Estado que almacena los datos del usuario
    const [usuario, setUsuario] = useState({
        nombre: '',
        edad: '',
    });

    // Estado para manejar la alerta
    const [alertShown, setAlertShown] = useState(false);

    // Maneja los cambios en los campos de entrada
    const manejarCambio = (campo: string, valor: string) => {
        setUsuario((prevState) => ({
            ...prevState,
            [campo]: valor,
        }));
    };

    // Valida y muestra un mensaje con el nombre y la edad
    const mostrarMensaje = () => {
        const edadNumerica = parseInt(usuario.edad.trim(), 10);

        // Validación de nombre
        if (!usuario.nombre.trim()) {
            Alert.alert('Error', 'Por favor, ingresa tu nombre.');
            return;
        }

        // Validación de edad
        if (isNaN(edadNumerica) || edadNumerica <= 0) {
            Alert.alert('Error', 'La edad debe ser un número válido y mayor que 0.');
            return;
        }

        // Mostrar mensaje con la información
        if (!alertShown) {
            setAlertShown(true); // Evitar alertas repetidas
            Alert.alert('Mensaje', `Hola, ${usuario.nombre}. Tienes ${edadNumerica} años.`, [
                {
                    text: 'OK',
                    onPress: () => setAlertShown(false), // Resetea el estado de la alerta después de presionar OK
                },
            ]);
        }
    };

    // Deshabilitar el botón si los datos son incorrectos
    const esBotonDeshabilitado = !usuario.nombre.trim() || isNaN(parseInt(usuario.edad.trim(), 10)) || parseInt(usuario.edad.trim(), 10) <= 0;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.titulo}>Registro de Usuario</Text>

                {/* Campo para ingresar el nombre */}
                <Text style={styles.label}>Nombre:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Escribe tu nombre"
                    keyboardType="default"
                    value={usuario.nombre}
                    onChangeText={(texto) => manejarCambio('nombre', texto)}
                />

                {/* Campo para ingresar la edad */}
                <Text style={styles.label}>Edad:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Escribe tu edad"
                    keyboardType="numeric"
                    value={usuario.edad}
                    onChangeText={(texto) => manejarCambio('edad', texto)}
                />

                {/* Botón para enviar los datos */}
                <TouchableOpacity
                    style={[styles.boton, esBotonDeshabilitado && styles.botonDeshabilitado]} // Aplica estilo si el botón está deshabilitado
                    onPress={mostrarMensaje}
                    disabled={esBotonDeshabilitado} // Deshabilitar el botón si los datos son incorrectos
                >
                    <Text style={styles.botonTexto}>Mostrar Mensaje</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// Estilos renovados
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E0E0E0",
    },
    card: {
        width: "85%",
        backgroundColor: "#FFF",
        padding: 25,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 4 },
        elevation: 5,
    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 5,
        color: "#555",
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 15,
    },
    boton: {
        backgroundColor: "#FF5733",
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 50,
    },
    botonDeshabilitado: {
        backgroundColor: "#B0B0B0", // Color gris si el botón está deshabilitado
    },
    botonTexto: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold",
    },
});

