import React from "react";
import { ComponentProps } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type IconSet = "Ionicons" | "FontAwesome";
type IoniconsNames = ComponentProps<typeof Ionicons>["name"];
type FontAwesomeNames = ComponentProps<typeof FontAwesome>["name"];

type IconProps = {
  style?: any;
  iconSet: IconSet;
  name: IoniconsNames | FontAwesomeNames;
  size?: number;
  color?: string;
};

export function TabBarIcon({
  style,
  iconSet,
  name,
  size = 28,
  color,
  ...rest
}: IconProps) {
  const IconComponent = iconSet === "Ionicons" ? Ionicons : FontAwesome;
  return (
    <IconComponent
      name={name as any}
      size={size}
      color={color}
      style={[{ marginBottom: -3 }, style]}
      {...rest}
    />
  );
}
