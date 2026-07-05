import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from '../styles/AppStyle';

export default function SumFirstLastDigit({ title }) {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  function handleCalculate() {
    let s = number;
    let first = Number(s[0]);
    let last = Number(s[s.length - 1]);

    let answer = 0;
    answer = first + last;
    setResult(answer);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Number"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

      <Button title="Calculate" onPress={handleCalculate} />
      <Text>Result: {result}</Text>
    </View>
  );
}
