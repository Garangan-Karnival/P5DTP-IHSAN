import React from 'react';
import { View, Text } from 'react-native';

const DetailScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      {/* Tampilkan gambar dan detail lainnya */}
    </View>
  );
};

export default DetailScreen;