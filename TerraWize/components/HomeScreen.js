import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TerraWize Planning</Text>
      <Button title="Plan Trip" onPress={() => navigation.navigate('Planner')} />
    </View>
  );
}
