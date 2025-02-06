import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RelojDigital() {
    const [hora, setHora] = useState('');
    const [is24HourFormat, setIs24HourFormat] = useState(true); // Estado para el formato de hora

    // Función para actualizar la hora
    const actualizarHora = () => {
        const fechaActual = new Date();
        let horas = fechaActual.getHours();
        const minutos = String(fechaActual.getMinutes()).padStart(2, '0');
        const segundos = String(fechaActual.getSeconds()).padStart(2, '0');
        let ampm = '';

        // Si estamos usando el formato de 12 horas, ajustamos la hora
        if (!is24HourFormat) {
            ampm = horas >= 12 ? 'PM' : 'AM';
            horas = horas % 12; // Convertir a formato de 12 horas
            horas = horas ? horas : 12; // La hora 0 se convierte en 12
        } else {
            ampm = ''; // En formato de 24 horas no necesitamos AM/PM
        }

        const horaFormateada = `${String(horas).padStart(2, '0')}:${minutos}:${segundos} ${ampm}`;
        setHora(horaFormateada);
    };

    // Establecer intervalo para actualizar la hora cada segundo
    useEffect(() => {
        const intervalo = setInterval(actualizarHora, 1000);
        actualizarHora(); // Llamada inicial para evitar el retraso

        return () => clearInterval(intervalo); // Limpiar el intervalo cuando el componente se desmonte
    }, [is24HourFormat]);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Hora Actual</Text>
            <Text style={styles.reloj}>{hora}</Text>
            <Text
                style={styles.cambiarFormato}
                onPress={() => setIs24HourFormat(prev => !prev)}
            >
                Cambiar formato: {is24HourFormat ? '12 horas' : '24 horas'}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFCC00',
        marginBottom: 15,
    },
    reloj: {
        fontSize: 65,
        fontWeight: 'bold',
        color: '#00FF99',
        backgroundColor: '#333',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 15,
        textAlign: 'center',
        shadowColor: '#00FF99',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        elevation: 8,
    },
    cambiarFormato: {
        marginTop: 20,
        fontSize: 18,
        color: '#FF5733',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});
