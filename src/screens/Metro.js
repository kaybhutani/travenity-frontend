import React from 'react';
import {
  Container,
  Card,
  Form,
  Content,
  Item,
  Input,
  Text,
  View,
} from 'native-base';
import {StyleSheet} from 'react-native';
import CoachBox from '../components/CoachBox';
import MetroFooter from '../components/MetroFooter';
class Metro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coaches: [],
    };
    this.state.id = props.navigation.getParam('id');
    const url = 'http://4aa72bfc.ngrok.io';
    fetch(url + '/check', {
      method: 'POST',
      body: JSON.stringify({metroId: this.state.id}),
    })
      .then(res => res.json())
      .then(data => {
        this.setState({coaches: data.density});
      })
      .then(() => console.log(this.state));
  }
  render() {
    return (
      <Container>
        <Card>
          <Form>
            <Item>
              <Input placeholder="Boarding" />
            </Item>
          </Form>
        </Card>
        <Content padder>
          <Card style={{padding: 10}}>
            <View style={styles.flex1}>
              <Text>Arriving Time:</Text>
              <Text>9:45am</Text>
            </View>
            <View style={styles.flex2}>
              {this.state.coaches.map(function(coach, i) {
                return <CoachBox key={i} density={coach} />;
              })}
            </View>
          </Card>
        </Content>

        <MetroFooter />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  flex1: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  flex2: {
    display: 'flex',
    justifyContent: 'center',
  },
});
export default Metro;
