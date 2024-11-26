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
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    GilroyRegular: require("../assets/fonts/Gilroy-Regular.ttf"),
    GilroyBold: require("../assets/fonts/Gilroy-Bold.ttf"),
  });
  const [loading, setLoading] = useState(true);
  const verificarLogin = useAuthStore((s) => s.verificarLogin);

  useEffect(() => {
    (async () => {
      try {
        await verificarLogin();
      } finally {
        setLoading(false);
      }
    })();
  }, [verificarLogin, setLoading]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded && loading) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "red" }}>
      <PaperProvider theme={theme}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <QueryClientProvider client={queryClient}>
            <Stack screenOptions={{ headerShown: false }}>
              {/* <Stack.Screen name="(tabs)" /> */}
              <Stack.Screen name="apresentacao" />
              <Stack.Screen name="cadastro" />
              <Stack.Screen
                name="cadastrar-medicamento"
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
    </GestureHandlerRootView>
  );
}
