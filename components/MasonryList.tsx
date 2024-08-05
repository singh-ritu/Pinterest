import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import PinComponent from "./PinComponent";
import { pins } from "@/constants/Pins";

const MasonryList = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
});

export default MasonryList;
