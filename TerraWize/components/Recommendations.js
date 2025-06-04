import React from 'react';
import { View, Text, Button } from 'react-native';
import fetchWeather from '../services/weatherService';

export default function Recommendations() {
  const getRecommendations = async () => {
    const data = await fetchWeather();
    // Placeholder for analysis of solar/wind/temperature etc.
    console.log(data);
  };

  return (
    <View>
      <Button title="Get Recommendations" onPress={getRecommendations} />
      <Text style={{ marginTop: 8 }}>*Results will appear here*</Text>
    </View>
  );
}
