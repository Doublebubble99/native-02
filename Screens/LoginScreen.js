import React from "react";
import { useFonts } from "expo-font";
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
export default function LoginScreen() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.otf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.otf"),
  });
  const styles = StyleSheet.create({
    container: {
      marginTop: 323,
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
      paddingTop: 32,
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
    },
    refText: {
      color: "#1B4371",
      textAlign: "center",
      fontFamily: "Roboto-Regular",
      fontSize: 16,
      fontStyle: "normal",
    },
    underlined: {
      textDecorationLine: "underline",
    },
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <ImageBackground imageStyle source={require("./bg-photo.png")}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <Text style={styles.title}>Log in</Text>
            <KeyboardAvoidingView enabled={false}>
              <TextInput
                placeholder="Email address"
                style={styles.input}
                onEndEditing={Keyboard.dismiss}
              />
              <TextInput
                placeholder="Password"
                style={styles.input}
                onEndEditing={Keyboard.dismiss}
              />
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <Text style={styles.refText}>
              Don't have account? <Text style={styles.underlined}>Sign up</Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
}
