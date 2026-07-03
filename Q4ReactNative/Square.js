import React from "react";
import styles from "./style";
import { View, Text, Alert, Button } from "react-native";

function ClickOnTheSquare(value) {
  Alert.alert(value);
}

const Square = ({ text }) => (
  <View style={[styles.box, styles.squareBox]}>
    <Text>{text}</Text>
    <Button title="Click" onPress={() => ClickOnTheSquare(text)} />
  </View>
);

export default Square;