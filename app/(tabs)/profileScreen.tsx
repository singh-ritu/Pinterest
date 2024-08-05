import MasonryList from "@/components/MasonryList";
import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function ProfileScreen() {
  const imageUrl =
    "https://i.pinimg.com/originals/a5/03/7c/a5037cf31dcb51e39511c2dea28123ce.jpg";
  return (
    <View style={styles.container}>
      <View style={styles.profileBox}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Ritu Singh</Text>
        <Text style={styles.subtitle}>145 Followers | 456 Following</Text>
      </View>
      <MasonryList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  profileBox: {
    alignItems: "center",
    margin: 20,
  },
  image: {
    width: 150,
    aspectRatio: 1,
    borderRadius: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
  },
  subtitle: {
    color: "#4d4b4b",
    fontWeight: "600",
  },
});
