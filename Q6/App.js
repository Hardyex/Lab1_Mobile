import React from 'react';
import { ScrollView, Text } from 'react-native';
import EmployeeForm from './components/EmployeeForm';
import SumFirstLastDigit from './components/SumFirstLastDigit';
import MinThreeNumbers from './components/MinThreeNumbers';
import HailstoneSequence from './components/HailstoneSequence';

export default function App() {
  return (
    <ScrollView>
      <EmployeeForm title="Employee Information" />
      <SumFirstLastDigit title="Sum First And Last Digit" />

      <MinThreeNumbers title="Find Min Between 3 Numbers" />
      <HailstoneSequence title="Hailstone Sequence" />
    </ScrollView>
  );
}
