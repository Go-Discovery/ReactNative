import React from 'react';
import { View, Text, TabBar } from 'react-native';


// eslint-disable-next-line react/prefer-stateless-function
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
