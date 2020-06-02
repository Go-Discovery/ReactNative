// eslint-disable-next-line import/no-extraneous-dependencies
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screen/HomeScreen';
import Login from '../Screen/Login';
import SignInScreen from '../Screen/SignInScreen';
import MapsScreen from '../Screen/MapsScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import RouteScreen from '../Screen/RouteScreen';
import ProfilScreen from '../Screen/ProfilScreen';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import {Image} from 'react-native'
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={require('../Style/Logo.png')}
        />
    );
}

const HomeStack = () => (
        <Stack.Navigator initialRouteName={'Home'}
                         screenOptions={{
                             gestureEnabled: true,
                             headerTitleStyle: {
                                 color: 'white'
                             },
                             headerStyle: {
                                 backgroundColor: '#694fad'
                             }
                         }}>
                    <Stack.Screen name='Accueil' component={HomeScreen}/>
                    <Stack.Screen name='Login' component={Login}
                                  /*screenOptions={{animationTypeForReplace: state.isSignout ? 'pop' : 'push',}}

                                   */
                        />
                    <Stack.Screen name='SignIn' component={SignInScreen}/>
                    <Stack.Screen name='ProfilScreen' component={ProfilScreen}/>
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
    <Tab.Navigator
        barStyle={{ backgroundColor: '#694fad' }}
    >
        <Tab.Screen name='Accueil' component={RouteScreen}
                    barStyle={{ backgroundColor: '#694fad' }}
                    options={{
                        tabBarIcon: ({  }) => (
                            <Image  source={require('../Style/home.png')}
                            />
                        ),
                    }}
        />
        <Tab.Screen name='Carte' component={MapsScreen}
                    initialRouteName="Carte"
                    barStyle={{ backgroundColor: '#694fad' }}
                    options={{
                        tabBarIcon: ({  }) => (
                            <Image  source={require('../Style/location.png')}
                            />
                        ),
                    }}
        />
        <Tab.Screen name='Profil' component={HomeStack}
                    barStyle={{ backgroundColor: '#694fad' }}
                    options={{
                        tabBarIcon: ({  }) => (
                            <Image  source={require('../Style/user.png')}
                            />
                        ),

                    }}
        />
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
