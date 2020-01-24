import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HelloWorld from './screens/HelloWorld';
const MainNavigator = createStackNavigator({
  Hello: {
    screen: HelloWorld,
  },
});

const App = createAppContainer(MainNavigator);

export default App;
