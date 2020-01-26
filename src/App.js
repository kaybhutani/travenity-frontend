import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchResults from './screens/SearchResults';
import Metro from './screens/Metro';
const MainNavigator = createStackNavigator({
  SearchResults: {
    screen: SearchResults,
  },
  MetroResult: {
    screen: Metro,
  },
});

const App = createAppContainer(MainNavigator);

export default App;
