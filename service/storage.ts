import AsyncStorage from "@react-native-async-storage/async-storage";

type Storage = {
  key: string;
  data: string;
};

export const setData = async ({ key, data }: Storage) => {
  try {
    await AsyncStorage.setItem(key, data);
    return true;
  } catch (e) {
    return false;
  }
};

export const getData = async <T = string>(
  key: string
): Promise<T | undefined> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value === null) return;

    try {
      return JSON.parse(value) as T;
    } catch {
      return value as T;
    }
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};
