import React from 'react';

import {Card, View, Text, Button, Right} from 'native-base';
import {StyleSheet} from 'react-native';

class SearchCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.metro.metro.metroId,
    };
  }
  render() {
    return (
      <Card>
        <View style={styles.flex1}>
          <Text>Arriving Time:</Text>
          <Text>{this.props.metro.arrivalTime}</Text>
        </View>
        <View style={styles.flex1}>
          <Text>Destination Station:</Text>
          <Text>{this.props.metro.destinationStation}</Text>
        </View>
        <View>
          <Right style={styles.btn}>
            <Button
              onPress={() =>
                this.props.navigation.push('MetroResult', {id: this.state.id})
              }>
              <Text>Check Coaches</Text>
            </Button>
          </Right>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  flex1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  btn: {
    textAlign: 'right',
    paddingVertical: 30,
  },
});
export default SearchCard;
