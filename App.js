import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/home'
import ProfileScreen from './screens/profile'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;