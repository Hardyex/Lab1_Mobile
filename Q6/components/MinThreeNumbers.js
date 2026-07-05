import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from '../styles/AppStyle';

export default function MinThreeNumbers({ title }) {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [result, setResult] = useState('');

  function handleFind() {
    if (number1 === '' || number2 === '' || number3 === 'null') {
      setResult('Fill all numbers');
      return;
    }
    let a = Number(number1);
    let b = Number(number2);
    let c = Number(number3);
    let min = a;
    if (b < min) {
      min = b;
    }
    if (c < min) {
      min = c;
    }
    setResult(min);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter First Number"
        keyboardType="numeric"
        value={number1}
        onChangeText={setNumber1}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Second Number"
        keyboardType="numeric"
        value={number2}
        onChangeText={setNumber2}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Last Number"
        keyboardType="numeric"
        value={number3}
        onChangeText={setNumber3}
      />

      <Button title="Find Min" onPress={handleFind} />

      <Text>Result: {result}</Text>
    </View>
  );
}
