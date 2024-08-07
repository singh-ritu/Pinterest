import {
  View,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";
import PinComponent from "./PinComponent";
import { pins } from "@/constants/Pins";

const MasonryList = () => {
  const width = useWindowDimensions().width;
  const numColumns = Math.ceil(width / 350);
  return (
    <ScrollView>
      <View style={styles.container}>
        {Array.from(Array(numColumns)).map((col, colIndex) => (
          <View style={styles.column}>
            {pins
              .filter((_, index) => index % numColumns === colIndex)
              .map((pin) => (
                <PinComponent pin={pin} key={pin.id} />
              ))}
          </View>
        ))}
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
