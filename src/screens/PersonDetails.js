import React from 'react';
import { View, Text } from 'react-native';

export default (props) => {
  const {name, height, mass, hairColor, skinColor, gender, birthYear} = props.navigation.state.params
  return (
    <View style={{
      backgroundColor: '#fff',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 5,
    }}>
      <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
        <Text style={{ fontSize: 24 }}>{ name }</Text>
        <Text>{gender}</Text>
      </View>
      <View style={{
        flexDirection:
        'column',
        justifyContent: 'space-between',
        margin: 10,
      }}>
        <Text style={{ color: 'blue', fontSize: 16, }}>{'Height: ' + height}</Text>
        <Text style={{ color: 'blue', fontSize: 16, }}>{'Mass: ' + mass}</Text>
        <Text style={{ color: 'blue', fontSize: 16, }}>{'Skin Color: ' + skinColor}</Text>
        <Text style={{ color: 'blue', fontSize: 16, }}>{'Hair Color: ' + hairColor}</Text>
        <Text style={{ color: 'blue', fontSize: 16, }}>{'Birth Year: ' + birthYear}</Text>
      </View>
    </View>
  );

}