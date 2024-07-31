import PinComponent from "@/components/PinComponent";
import * as React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <GestureHandlerRootView>
      <NativeViewGestureHandler>
        <View style={styles.container}>
          <PinComponent />
        </View>
      </NativeViewGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
