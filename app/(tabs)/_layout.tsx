import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              iconSet="Ionicons"
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="createPin"
        options={{
          title: " ",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              iconSet="FontAwesome"
              name={focused ? "plus-square" : "plus-square-o"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profileScreen"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              iconSet="Ionicons"
              name={focused ? "person-circle" : "person-circle-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
