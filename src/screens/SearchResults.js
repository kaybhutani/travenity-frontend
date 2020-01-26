import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Card,
  Form,
  Item,
  Input,
  View,
  Button,
  Text,
  Spinner,
} from 'native-base';
import SearchCard from '../components/SearchCard';
class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
      destination: '',
      boarding: '',
      results: [],
      isLoading: false,
    };
  }
  fetchData = () => {
    this.setState({isLoading: true, results: []});
    const url = 'http://4aa72bfc.ngrok.io';
    fetch(url + '/search', {
      method: 'POST',
      body: JSON.stringify({
        board: this.state.boarding,
        dest: this.state.destination,
      }),
    })
      .then(res => res.json())
      .then(data => this.setState({results: data.results}))
      .then(() => {
        this.setState({isLoading: false});
      });
  };
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <Form>
              <Item>
                <Input
                  placeholder="Boarding"
                  onChangeText={text => this.setState({boarding: text})}
                />
              </Item>
              <Item last>
                <Input
                  placeholder="Destination"
                  onChangeText={text => this.setState({destination: text})}
                />
              </Item>
              <Button onPress={this.fetchData}>
                <Text>Get Metro</Text>
              </Button>
            </Form>
          </Card>
          <View style={styles.flex2}>
            {this.state.isLoading ? <Spinner color="red" /> : <Text />}

            {this.state.results.map(function(metro, i) {
              return (
                <SearchCard
                  key={i}
                  navigation={this.props.navigation}
                  metro={metro}
                />
              );
            }, this)}
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    minHeight: '100%',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  SearchForm: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    color: 'black',
  },
});
export default SearchResults;
