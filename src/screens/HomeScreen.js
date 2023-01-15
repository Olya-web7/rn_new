import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello</Text>
      <Button
        title="components demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button title="list demo" onPress={() => navigation.navigate("List")} />
      <Button
        title="image screen"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="counter screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Color screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Square screen"
        onPress={() => navigation.navigate("Square")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
