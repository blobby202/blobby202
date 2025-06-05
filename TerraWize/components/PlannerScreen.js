import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import LocationPicker from './LocationPicker';
import EquipmentForm from './EquipmentForm';
import Recommendations from './Recommendations';

export default function PlannerScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <LocationPicker />
      <EquipmentForm />
      <Recommendations />
    </ScrollView>
  );
}
