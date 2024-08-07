import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
// import { pins } from "@/constants/Pins";

interface Pin {
  image: ImageSourcePropType;
  title: string;
  id: string;
}

interface Props {
  pin: Pin;
}

export default function PinComponent(props: Props) {
  const { image, title, id } = props.pin;

  const [likedPin, setLikedPin] = useState<{ [key: string]: boolean }>({});
  const [ratio, setRatio] = useState(1);

  const onLike = (id: string) => {
    setLikedPin((prevLikedPins) => ({
      ...prevLikedPins,
      [id]: !prevLikedPins[id],
    }));
    console.log(likedPin);
  };

  useEffect(() => {
    if (image) {
      const { width, height } = Image.resolveAssetSource(image);
      setRatio(width / height);
    }
  }, [image]);

  useEffect(() => {
    console.log("Updated Ratios: ", ratio);
  }, [ratio]);

  return (
    <View>
      <View style={styles.pin}>
        <View>
          <Image
            source={image}
            style={[styles.image, { aspectRatio: ratio }]}
          />
          <Pressable>
            <Ionicons
              name={likedPin[id] ? "heart" : "heart-outline"}
              size={16}
              color="black"
              style={styles.heartBtn}
              onPress={() => onLike(id)}
            />
          </Pressable>
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pin: {
    width: "100%",
    padding: 4,
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
    margin: 5,
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22,
    color: "#4d4b4b",
  },
  image: {
    width: "100%",
    height: undefined,
    borderRadius: 15,
  },
});
