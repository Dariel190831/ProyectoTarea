import { useColorScheme } from "@/hooks/useColorScheme";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function MastersLayout() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen 
                    name="reloj" 
                    options={{ title: "Reloj de Tiempo" }} 
                />
                {/* Puedes agregar más pantallas aquí, si es necesario */}
            </Stack>
            <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        </ThemeProvider>
    );
}
