import React from "react";
import { useFonts } from "expo-font";
import {
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
export default function RegistrationScreen() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.otf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.otf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  const styles = StyleSheet.create({
    container: {
      position: "relative",
      marginTop: 263,
      width: 375,
      height: 549,
      backgroundColor: "#fff",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      alignItems: "center",
    },
    title: {
      color: "#212121",
      textAlign: "center",
      fontSize: 30,
      fontFamily: "Roboto-Medium",
      letterSpacing: 0.3,
      paddingTop: 92,
      paddingBottom: 33,
    },
    input: {
      color: "#BDBDBD",
      fontFamily: "Roboto-Regular",
      fontSize: 16,
      marginBottom: 16,
      width: 343,
      height: 50,
      backgroundColor: "#F6F6F6",
      borderWidth: 1,
      borderColor: "#E8E8E8",
      borderStyle: "solid",
      borderRadius: 10,
      padding: 16,
    },
    button: {
      marginTop: 27,
      marginBottom: 16,
      display: "flex",
      width: 343,
      height: 51,
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
      borderRadius: 100,
      backgroundColor: "#FF6C00",
    },
    buttonText: {
      color: "#FFF",
      textAlign: "center",
      fontFamily: "Roboto-Regular",
      fontSize: 16,
      // lineHeight: "normal",
    },
    refText: {
      color: "#1B4371",
      textAlign: "center",
      fontFamily: "Roboto-Regular",
      fontSize: 16,
      fontStyle: "normal",
    },
    image: {
      position: "absolute",
      top: -60,
    },
  });
  return (
    <View>
      <ImageBackground imageStyle source={require("./bg-photo.png")}>
        <View style={styles.container}>
          <Image source={require("./photo.png")} style={styles.image} />
          <Text style={styles.title}>Registration</Text>
          <TextInput placeholder="Login" style={styles.input} />
          <TextInput placeholder="Email address" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
          <Text style={styles.refText}>Already have account? Sign in</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
