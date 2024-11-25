import { theme } from "@/constants/theme";
import { useAuthStore } from "@/hooks/stores/AuthStore";
import { useColorScheme } from "@/hooks/useColorScheme";
import { queryClient } from "@/service/queryClient";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    GilroyRegular: require("../assets/fonts/Gilroy-Regular.ttf"),
    GilroyBold: require("../assets/fonts/Gilroy-Bold.ttf"),
  });

  const verificarLogin = useAuthStore((s) => s.verificarLogin);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      verificarLogin();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <QueryClientProvider client={queryClient}>
          <Stack screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="(tabs)" /> */}
            <Stack.Screen name="apresentacao" />
            <Stack.Screen name="cadastro" />
            <Stack.Screen
              name="cadastro-medicamento"
              options={{ presentation: "modal" }}
            />
            <Stack.Screen
              name="editar-medicamento"
              options={{ presentation: "modal" }}
            />
          </Stack>
        </QueryClientProvider>
      </ThemeProvider>
    </PaperProvider>
  );
}
