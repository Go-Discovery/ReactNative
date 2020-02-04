import React from 'react';

import {
  View,
  Label,
  TouchableOpacity,
    TextInput,
    Text,
    Button,
    ScrollView,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';


export default class SignInScreen extends React.Component{
  constructor() {
    super();
    this.state={
      email:'',
      pass:'',
      error:''
    }
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('HomeSCREEN');
  };


  render() {
    return(
        <View style={styles.container}>
          <ScrollView>
              <Text>Go Discovery</Text>
          <TextInput
              placeholder="Email"
              type="email"
              style={styles.input}
          />
          <TextInput
              placeholder="Mot de passe"
              secureTextEntry/>
          </ScrollView>
        </View>

    );
  }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    input: {
        borderBottomWidth: 0,
        marginBottom: 10,
        borderRadius: 2,
        paddingVertical: 5,
        width: '100%',
    },
    placeholder: {
        fontSize: 12,
    },
    errorMessage: {
        marginTop: 40,
    },
});










