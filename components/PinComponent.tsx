import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { pins } from "@/constants/Pins";
import { FlatList } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PinComponent() {
  const [ratio, setRatio] = useState<{ [key: string]: number }>({});
  const [likedPin, setLikedPin] = useState<{ [key: string]: boolean }>({});

  const onLike = (id: string) => {
    setLikedPin((prevLikedPins) => ({
      ...prevLikedPins,
      [id]: !prevLikedPins[id],
    }));
  };

  const getImageRatio = (image: any, id: string) => {
    const { width, height } = Image.resolveAssetSource(image);
    setRatio((prevRatio) => ({
      ...prevRatio,
      [id]: width / height,
    }));
    console.log(
      `Image ID: ${id}, Width: ${width}, Height: ${height}, Ratio: ${
        width / height
      }`
    );
  };

  useEffect(() => {
    pins.forEach((pin) => {
      getImageRatio(pin.image, pin.id.toString());
    });
  }, []);

  useEffect(() => {
    console.log("Updated Ratios: ", ratio);
  }, [ratio]);

  return (
    <View>
      <FlatList
        data={pins}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.pin}>
            <Image
              source={item.image}
              style={[
                styles.image,
                { aspectRatio: ratio[item.id.toString()] || 1 },
              ]}
            />
            <View>
              <Pressable>
                <Ionicons
                  name={likedPin[item.id] ? "heart" : "heart-outline"}
                  size={24}
                  color="black"
                  style={styles.heartBtn}
                  onPress={() => onLike(item.id)}
                />
              </Pressable>
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pin: {
    width: "100%",
  },
  heartBtn: {
    backgroundColor: "#D3CFD4",
    position: "absolute",
    bottom: 10,
    right: 10,
    padding: 8,
    borderRadius: 50,
  },
  title: {
    padding: 4,
  },
  image: {
    width: "100%",
    height: undefined,
    borderRadius: 25,
  },
});
