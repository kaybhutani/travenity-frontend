import React, {Component} from 'react';
import {Card, Text, View, CardItem} from 'native-base';
import {StyleSheet} from 'react-native';
class CoachBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'green',
    };
    var den = props.density;
    switch (true) {
      case den >= 0 && den < 5:
        this.state.density = '#ADFF7E';
        break;
      case den >= 5 && den < 10:
        this.state.color = '#FDE753';
        break;
      case den >= 10 && den < 15:
        this.state.color = '#FE5300';
        break;
      case den >= 15:
        this.state.color = '#FE0000';
        break;
    }
  }
  render() {
    return (
      <Card transparent>
        <CardItem
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: this.state.color,
            height: 75,
          }}>
          <View>
            <Text>~ Seats left: {20 - this.props.density}</Text>
          </View>
        </CardItem>
      </Card>
    );
  }
}

export default CoachBox;
