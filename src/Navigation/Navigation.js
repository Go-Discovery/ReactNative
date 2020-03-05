// eslint-disable-next-line import/no-extraneous-dependencies
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screen/HomeScreen';
import Login from '../Screen/Login';
import SignInScreen from '../Screen/SignInScreen';
import ProfilScreen from '../Screen/ProfilScreen';
import MapsScreen from '../Screen/MapsScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import theme from '../Style/theme';
import {
    Image
} from 'react-native'

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const TabBarIcon = (focused: boolean): ReactElement => {
    return (
        <Image
            style={{
                width: focused ? 24 : 18,
                height: focused ? 24 : 18,
            }}
            source={IC_MASK}
        />
    );
};

const HomeStack = () => (
        <Stack.Navigator initialRouteName={'Home'}
                         screenOptions={{
                             gestureEnabled: true,
                             headerTitleStyle: {
                                 color: 'white'
                             },
                             headerStyle: {
                                 backgroundColor: '#457B9D'
                             }
                         }}>
                    <Stack.Screen name='Accueil' component={HomeScreen}/>
                    <Stack.Screen name='Login' component={Login}
                                  /*screenOptions={{animationTypeForReplace: state.isSignout ? 'pop' : 'push',}}

                                   */
                        />
                    <Stack.Screen name='SignIn' component={SignInScreen}/>
        </Stack.Navigator>
);
/*
function MainStackNavigator(): React.ReactElement {
    this.state = {
        userToken: null
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'}
                             screenOptions={{
                                 gestureEnabled: true,
                                 headerTitleStyle: {
                                     color: 'white'
                                 },
                                 headerStyle: {
                                     backgroundColor: '#457B9D'
                                 }
                             }}>
                {state.userToken == null ? (
                    <>
                        <Stack.Screen name='Accueil' component={HomeScreen}/>
                        <Stack.Screen name='Login' component={Login}
                                      screenOptions={{animationTypeForReplace: state.isSignout ? 'pop' : 'push',}}/>
                        <Stack.Screen name='SignIn' component={SignInScreen}/>
                    </>) : (
                    <Stack.Screen name='Votre Profils' component={ProfilScreen}/>)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

 */
const TabsScreen = () => (
    <Tab.Navigator>
        <Tab.Screen name='Carte' component={MapsScreen}/>
        <Tab.Screen name='Profil' component={HomeStack}/>
    </Tab.Navigator>
);

//export default MainStackNavigator

const RootStack = createStackNavigator();
const RootStackScreen = (userToken) =>(
    <RootStack.Navigator headerMode="none">
            <RootStack.Screen
                name="Auth"
                component={TabsScreen}
                options={{
                    animationEnabled: false
                }}
            />
    </RootStack.Navigator>
);

const defaultOptions = {
  headerStyle: {
    backgroundColor: '#72d6c9',
  },
  headerTitleStyle: {
    color: 'white'
  },
};

export default () => {
    /*
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);

    const authContext = React.useMemo(() => {
        return {
            signIn: () => {
                setIsLoading(false);
                setUserToken("asdf");
            },
            signUp: () => {
                setIsLoading(false);
                setUserToken("asdf");
            },
            signOut: () => {
                setIsLoading(false);
                setUserToken(null);
            }
        };
    }, []);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return <Splash />;
    }

     */

    return (
            <NavigationContainer>
                <RootStackScreen userToken={'ui'}/>
            </NavigationContainer>
    );
};
