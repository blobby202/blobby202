import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function EquipmentForm() {
  const [solarCapacity, setSolarCapacity] = useState('');
  const [windRotor, setWindRotor] = useState('');

  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ fontWeight: 'bold' }}>Equipment</Text>
      <Text>Solar Panel Capacity (W)</Text>
      <TextInput
        value={solarCapacity}
        onChangeText={setSolarCapacity}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8 }}
      />
      <Text>Wind Rotor Diameter (m)</Text>
      <TextInput
        value={windRotor}
        onChangeText={setWindRotor}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8 }}
      />
    </View>
  );
}
