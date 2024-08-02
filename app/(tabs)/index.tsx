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
            <View style={{ flex: 1 }}>
              <PinComponent pin={pins[1]} />
              <PinComponent pin={pins[2]} />
              <PinComponent pin={pins[5]} />
              <PinComponent pin={pins[6]} />
            </View>

            <View style={{ flex: 1 }}>
              <PinComponent pin={pins[3]} />
              <PinComponent pin={pins[4]} />
              <PinComponent pin={pins[7]} />
              <PinComponent pin={pins[0]} />
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
});

{
  /* <View style={{ backgroundColor: "94ffa955", flex: 1 }}>
</View>
<View style={{ backgroundColor: "cd94ff55", flex: 1 }}></View> */
}
