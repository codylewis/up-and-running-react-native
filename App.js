import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>Lightning Talks are great!</Text>
        </View>
        <View style={[styles.container, styles.darkSide]}>
          <Text style={{ color: 'white' }}>This is the dark side</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  darkSide: {
    backgroundColor: 'black'
  }
});
