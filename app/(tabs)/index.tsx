import PinComponent from "@/components/PinComponent";
import { pins } from "@/constants/Pins";
import * as React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <GestureHandlerRootView>
      <NativeViewGestureHandler>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.column}>
              {pins
                .filter((_, index) => index % 2 === 0)
                .map((pin) => (
                  <PinComponent pin={pin} key={pin.id} />
                ))}
            </View>

            <View style={styles.column}>
              {pins
                .filter((_, index) => index % 2 != 0)
                .map((pin) => (
                  <PinComponent pin={pin} key={pin.id} />
                ))}
            </View>
          </View>
        </ScrollView>
      </NativeViewGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
});

{
  /* <View style={{ backgroundColor: "94ffa955", flex: 1 }}>
</View>
<View style={{ backgroundColor: "cd94ff55", flex: 1 }}></View> */
}
