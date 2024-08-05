import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { pins } from "@/constants/Pins";
import { FlatList } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

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

  //   const [ratio, setRatio] = useState<{ [key: string]: number }>({});
  //   const [likedPin, setLikedPin] = useState<{ [key: string]: boolean }>({});
  const [ratio, setRatio] = useState(1);

  //   const onLike = (id: string) => {
  //     setLikedPin((prevLikedPins) => ({
  //       ...prevLikedPins,
  //       [id]: !prevLikedPins[id],
  //     }));
  //   };

  //   const getImageRatio = (image: any, id: string) => {
  //     const { width, height } = Image.resolveAssetSource(image);
  //     setRatio((prevRatio) => ({
  //       ...prevRatio,
  //       [id]: width / height,
  //     }));
  //     console.log(
  //       `Image ID: ${id}, Width: ${width}, Height: ${height}, Ratio: ${
  //         width / height
  //       }`
  //     );
  //   };

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
      {/* <FlatList
        data={pins}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
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
              
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      /> */}
      <View style={styles.pin}>
        <View>
          <Image
            source={image}
            style={[styles.image, { aspectRatio: ratio }]}
          />
          <Pressable>
            <Ionicons
              //   name={likedPin[item.id] ? "heart" : "heart-outline"}
              name="heart"
              size={16}
              color="black"
              style={styles.heartBtn}
              //   onPress={() => onLike(item.id)}
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
    color: "#181818",
  },
  image: {
    width: "100%",
    height: undefined,
    borderRadius: 15,
  },
});
