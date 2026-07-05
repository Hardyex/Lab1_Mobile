import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from '../styles/AppStyle';

export default function EmployeeForm({ title }) {
  // Destructuring ko can props.title
  // State
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [message, setMessage] = useState('');

  // Cac ham xu ly
  function handleUpdate() {
    setMessage('Update Succesfully!');
  }

  // Giao dien
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numberic"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your Occupation"
        value={occupation}
        onChangeText={setOccupation}
      />

      <Button title="Update" onPress={handleUpdate} />

      <Text>{message}</Text>
    </View>
  );
}
