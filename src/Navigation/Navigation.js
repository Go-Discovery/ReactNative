// eslint-disable-next-line import/no-extraneous-dependencies
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../Screen/HomeScreen';
import SignInScreen from '../Screen/SignInScreen';
import Login from '../Screen/Login';

const defaultOptions = {
  headerStyle: {
    backgroundColor: '#72d6c9',
    color:'#f4f4f4'
  },
  headerTitleStyle: {
    color: 'white'
  },
};
const AppNavigator = createStackNavigator({
  Home: {
    screen: Login,
  }
}, {
  defaultNavigationOptions: defaultOptions
});

export default createAppContainer(AppNavigator);
