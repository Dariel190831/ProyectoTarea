import { useColorScheme } from "@/hooks/useColorScheme";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function MastersLayout() {
    // Obtiene el esquema de color (oscuro o claro) desde el hook personalizado
    const colorScheme = useColorScheme();

    // Configuración del ThemeProvider según el esquema de color
    const currentTheme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

    return (
        <ThemeProvider value={currentTheme}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="contador" options={{ title: "Contador" }} />
            </Stack>
            <StatusBar style="auto" />
        </ThemeProvider>
    );
}
