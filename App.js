import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trueStatement: 'foo & bar are excellent variable names',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            style={{ height: 200, width: 250 }}
            source={require('./milwaukee-js-logo.jpeg')}
          // source={{ uri: 'https://secure.meetupstatic.com/photos/event/3/c/1/4/600_466515380.jpeg' }}
          />
          <Text>Lightning Talks are great!</Text>
        </View>
        <View style={[styles.container, styles.darkSide]}>
          <Text style={{ color: 'white', marginBottom: '5%' }}>This is the dark side</Text>
          <Text style={{ color: 'white' }}>{this.state.trueStatement}</Text>
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
