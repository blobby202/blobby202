import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import * as Location from 'expo-location';

export default function LocationPicker() {
  const [location, setLocation] = useState(null);
  const [manual, setManual] = useState('');

  const useGps = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return;
    }
    const loc = await Location.getCurrentPositionAsync({});
    setLocation(loc.coords);
  };

  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ fontWeight: 'bold' }}>Select Location</Text>
      <Button title="Use GPS" onPress={useGps} />
      <Text>OR</Text>
      <TextInput
        placeholder="Enter location"
        value={manual}
        onChangeText={setManual}
        style={{ borderWidth: 1, padding: 8, marginTop: 8 }}
      />
      {location && (
        <Text>GPS: {location.latitude}, {location.longitude}</Text>
      )}
    </View>
  );
}
