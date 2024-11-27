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
import { Href, router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [initialRoute, setInitialRoute] = useState<Href>("/");
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    GilroyRegular: require("../assets/fonts/Gilroy-Regular.ttf"),
    GilroyBold: require("../assets/fonts/Gilroy-Bold.ttf"),
  });

  const verificarLogin = useAuthStore((s) => s.verificarLogin);

  useEffect(() => {
    async function prepare() {
      try {
        const result = await verificarLogin();
        setInitialRoute(result ? "/medicamentos" : "/");
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useEffect(() => {
    (async () => {
      if (appIsReady && loaded) {
        router.push(initialRoute);
      }
    })();
  }, [loaded, appIsReady]);

  if (!loaded || !appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
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
    </SafeAreaProvider>
  );
}
