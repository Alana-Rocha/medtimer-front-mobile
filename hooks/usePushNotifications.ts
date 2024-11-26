import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";

export const usePushNotifications = () => {
  const [expoPushToken, setExpoPushToken] = useState<string | null>(null);

  useEffect(() => {
    const registerForPushNotificationsAsync = async () => {
      if (Device.isDevice) {
        const { status: existingStatus } =
          await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== "granted") {
          alert("Falha ao obter permissões para notificações!");
          return;
        }
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token); // Salve este token em seu backend para enviar notificações posteriormente
        setExpoPushToken(token);
      } else {
        alert("Notificações push só funcionam em dispositivos físicos.");
      }
    };

    registerForPushNotificationsAsync();
  }, []);

  return { token: expoPushToken };
};
