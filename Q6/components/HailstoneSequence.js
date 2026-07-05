import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from '../styles/AppStyle';

export default function HailstoneSequence({ title }) {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  function handleGenerate() {
    if (number === '' || number < 0) {
      setResult('Fill correct number');
      return;
    }
    let n = Number(number);
    let sequence = '';
    while (n !== 1) {
      sequence = sequence + n + ' -> ';
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = n * 3 + 1;
      }
    }
    sequence = sequence + n;

    setResult(sequence);
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

      <Button title="Display" onPress={handleGenerate} />
      <Text>Result: {result} </Text>
    </View>
  );
}
