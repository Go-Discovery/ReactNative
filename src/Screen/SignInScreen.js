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
    StyleSheet,
    AsyncStorage
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


    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const inputType = "";

        return (
            <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
                <View style={styles.container}>
                    <ScrollView>
                        <Text
                            style={styles.loginHeader}
                        >Inscription</Text>
                        <TextInput
                            placeholder="Nom"
                            type="nom"
                            style={styles.inputFiled}
                            placeholderTextColor='#f4f4f4'
                        />
                        <TextInput
                        placeholder="Prénom"
                        type="nom"
                        style={styles.inputFiled}
                        placeholderTextColor='#f4f4f4'
                        />
                        <TextInput
                            placeholder="Email"
                            type="email"
                            style={styles.inputFiled}
                            placeholderTextColor='#f4f4f4'
                        />
                        <TextInput
                            autoCorrect={false}
                            placeholderTextColor='#f4f4f4'
                            style={styles.inputFiled}
                            placeholder="Mot de passe"
                            secureTextEntry={inputType === "password"}/>
                        <TextInput
                            autoCorrect={false}
                            placeholderTextColor='#f4f4f4'
                            style={styles.inputFiled}
                            placeholder="Répétition du mot de passe"
                            secureTextEntry={inputType === "password"}/>
                        <TouchableOpacity onPress={this._signInAsync()}
                                          style={styles.button}
                        >
                            <Text
                                style={styles.text}
                            > S'inscrire  </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flex: 1,
        backgroundColor: '#72d6c9'
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1
    },
    avoidView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex:1
    },
    loginHeader: {
        textAlign: 'center',
        fontSize: 28,
        color: '#f4f4f4',
        fontWeight: "300",
        marginBottom: 40,
        flex : 1,
        padding : 20
    },
    text: {
        textAlign: 'center',
        color: '#f4f4f4',
        fontWeight: "300",
        flex : 1,
    },
    inputFiled: {
        borderBottomWidth: 1,
        padding : 15,
        borderColor : '#f4f4f4',
        color : '#f4f4f4',
        borderRadius : 0.3

    },
    container:{
        flex:1,
        padding : 20
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#df7599',
        padding : 10,
        margin : 20

    },
});

