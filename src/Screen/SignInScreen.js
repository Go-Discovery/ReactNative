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

import 'react-native-gesture-handler';

export default class SignInScreen extends React.Component{
  constructor() {
      super();
      this.inputs = {};
      this.state = {
          email: '',
          pass: '',
          firstname:'',
          lastname:'',
          doublepass:'',
          isSecure: true,
          isError: false,
          error:{
              email:'',
              pass: '',
              firstname:'',
              lastname:'',
              doublepass:'',}
      }
  }


    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(text) === false)
        {
            return false;
        }
        else {
            return true;
        }
    }



    _displayPassword = () => {
        this.setState((prevState) => ({
            isSecure: !prevState.isSecure
        }));
    };



  _signInAsync = async () => {
      //await AsyncStorage.setItem('userToken', 'abc');

      const error = {
          email: '',
          pass: '',
          firstname: '',
          lastname: '',
          doublepass:'',
          isError: false
      };

      const {
          email,
          pass,
          firstname,
          lastname,
          doublepass,
      } = this.state;


      if (!firstname.length) {
          error.firstName = 'Le prénom doit être rempli.';
          error.isError = true;
      }
      if (!lastname.length) {
          error.lastName = 'Le nom doit être rempli.';
          error.isError = true;
      }

      if (!email.length || !this.validate(email)) {
          error.email = ' Vide ou Email invalide';
          error.isError = true;
      }

      if(!pass.length){
          error.pass = 'Mot de passe non-valide';
          error.isError = true;
      }

      if (pass!=doublepass){
          error.pass = 'Les mots de passes sont différent'
      }



      this.setState({
          isError: error.isError,
          error: {
              firstname: error.firstName,
              lastname: error.lastName,
              email : error.email,
              pass: error.pass
          }
      });



  }

    firstNameChangeHandler = (firstname) => {
        this.setState({ firstname: firstname });
    };
    lastNameChangeHandler = (lastname) => {
        this.setState({ lastname: lastname });
    };
    emailChangeHandler = (email) =>{
        this.setState({
            email : email
        });
    };

    passChangeHandler = (pass) =>{
        this.setState({
            pass:pass,
        });
    };

    doublepassChangeHandler = (doublepass) =>{
        this.setState({
            doublepass: doublepass
        });
    };


    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const inputType = "";

        const {
            email,
            pass,
            firstname,
            lastname,
            doublepass,
            isError,
            error,
            isSecure
        } = this.state;

        return (
            <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
                <View style={styles.container}>
                    <ScrollView>
                        <Text
                            style={styles.loginHeader}
                        >Inscription</Text>
                        {isError && <Text style={styles.error}> {error.lastname}</Text>}
                        <TextInput
                            placeholder="Nom"
                            type="nom"
                            style={styles.inputFiled}
                            placeholderTextColor='#f4f4f4'
                            textContentType="name"
                            returnKeyType="next"
                            ref={(input) => { this.inputs.lastname= input; }}
                            onChangeText={this.lastNameChangeHandler}
                            value={lastname}
                        />
                        {isError && <Text style={styles.error}> {error.firstname}</Text>}
                        <TextInput
                        placeholder="Prénom"
                        type="prenom"
                        style={styles.inputFiled}
                        placeholderTextColor='#f4f4f4'
                        textContentType="name"
                        returnKeyType="next"
                        ref={(input) => { this.inputs.firstname = input; }}
                        onChangeText={this.firstNameChangeHandler}
                        value={firstname}
                        />
                        {isError && <Text style={styles.error}> {error.email}</Text>}
                        <TextInput
                            placeholder="Email"
                            type="email"
                            style={styles.inputFiled}
                            placeholderTextColor='#f4f4f4'
                            textContentType="email"
                            returnKeyType="next"
                            ref={(input) => { this.inputs.email = input; }}
                            onChangeText={this.emailChangeHandler}
                            value={email}
                        />
                        {isError && <Text style={styles.error}> {error.pass}</Text>}
                        <TextInput
                            autoCorrect={false}
                            placeholderTextColor='#f4f4f4'
                            style={styles.inputFiled}
                            placeholder="Mot de passe"
                            secureTextEntry={isSecure}
                            textContentType="password"
                            returnKeyType="next"
                            ref={(input) => { this.inputs.pass = input; }}
                            onChangeText={this.passChangeHandler}
                            value={pass}/>
                        <TextInput
                            autoCorrect={false}
                            placeholderTextColor='#f4f4f4'
                            style={styles.inputFiled}
                            placeholder="Répétition du mot de passe"
                            secureTextEntry={isSecure}
                            textContentType="password"
                            returnKeyType="next"
                            ref={(input) => { this.inputs.doublepass = input; }}
                            onChangeText={this.doublepassChangeHandler}
                            value={doublepass}/>

                        <TouchableOpacity onPress={() => this._signInAsync()}
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
        backgroundColor: '#694fad'
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
        padding : 20
    },
    textButton: {
        textAlign: 'center',
        color: '#694fad',
        fontWeight: "300",
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
        padding : 10,
        margin : 20

    },
    themeFontColor: {
        color: '#f1faee'
    },
    text:{
        textAlign: 'center',
        fontSize: 18,
        color: '#f4f4f4',
        fontWeight: "300",
        marginBottom: 40,
        padding : 20
    },
    error:{
        textAlign: 'center',
        color: 'red',
        fontWeight: "300",
    },
    littleText:{
        textAlign: 'center',
        fontSize: 14,
        color: '#f4f4f4',
        fontWeight: "300",
        marginBottom: 10,
        padding : 10,
    }

});

