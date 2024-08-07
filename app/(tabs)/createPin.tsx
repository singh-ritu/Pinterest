import { useState } from "react";
import React from "react";
import { Button, Image, View, StyleSheet, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TextInput } from "react-native";

export default function createPin() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // const handleSubmit = () => {};

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Button title="Upload Pin" onPress={pickImage} />
        {image && (
          <>
            <Image source={{ uri: image }} style={styles.image} />
            <TextInput
              placeholder="Title..."
              value={title}
              onChangeText={setTitle}
              style={styles.input}
            />
            <Button title="Submit Pin" />
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 10,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 5,
    width: "100%",
    borderRadius: 5,
    marginVertical: 10,
  },
});
