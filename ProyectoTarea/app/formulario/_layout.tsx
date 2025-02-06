import { useColorScheme } from "@/hooks/useColorScheme";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function MastersLayout() {
  const colorScheme = useColorScheme(); // Obtener el esquema de color actual
  
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="registro" options={{ title: "Registro" }} />
      </Stack>
      
      {/* Ajusta el color de la barra de estado dependiendo del tema */}
      <StatusBar style={colorScheme === 'dark' ? "light" : "dark"} />
    </ThemeProvider>
  );
}
