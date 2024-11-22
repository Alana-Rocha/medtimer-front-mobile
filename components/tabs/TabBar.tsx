import { icon } from "@/constants/icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import TabBarButton from "./TabBarButton";

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const primaryColor = "#0891b2";
  const greyColor = "#737373";
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            style={styles.tabbar}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name as keyof typeof icon}
            color={isFocused ? primaryColor : greyColor}
            label={typeof label === "string" ? label : ""}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    // position: "absolute",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    borderCurve: "continuous",
    // shadowColor: "black",
    shadowOffset: { width: 100, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
});

export default TabBar;
