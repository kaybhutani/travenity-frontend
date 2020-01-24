import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

class HelloWorld extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>HELLO</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export default HelloWorld;
