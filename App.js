import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trueStatement: 'foo & bar are excellent variable names',
      balanceInTheForce: true,
    }

    this.theRealTruth = this.theRealTruth.bind(this);
  }

  theRealTruth() {
    this.setState({
      trueStatement: 'all varaible names are excellent varliable names',
      balanceInTheForce: false,
    });
  }

  render() {
    let additionalStyles = this.state.balanceInTheForce ? {} : styles.displayNone;

    return (
      <View style={styles.container}>
        <View style={[styles.container, additionalStyles]}>
          <Image
            style={{ height: 200, width: 250 }}
            source={require('./milwaukee-js-logo.jpeg')}
          // source={{ uri: 'https://secure.meetupstatic.com/photos/event/3/c/1/4/600_466515380.jpeg' }}
          />
          <Text>Lightning Talks are great!</Text>
        </View>
        <TouchableHighlight style={[styles.container, styles.darkSide]} onPress={this.theRealTruth}>
          <View>
            <Text style={[styles.darkSideText, { marginBottom: '5%' }]}>This is the dark side</Text>
            <Text style={styles.darkSideText}>{this.state.trueStatement}</Text>
          </View>
        </TouchableHighlight>
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
  },

  darkSideText: {
    color: 'white',
    textAlign: 'center',
  },

  displayNone: {
    display: 'none',
  }
});
