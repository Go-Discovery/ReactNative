import React from 'react';


import {
    View,
    Text,
    KeyboardAvoidingView,
    TextInput,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';
import theme from '../Style/theme'
export default class Login extends React.Component{
    constructor() {
        super();
        this.inputs = {};
        this.state={
            email:'',
            pass:'',
            isSecure: true,
            editable: false,
            error:{
                email:'',
                pass:'',
                isError: false,
            }
        }
    }



    connection = async () =>{


        const error = {
            email: '',
            pass: '',
            isError: false
        };

        const {
            email,
            pass
        } = this.state;

        if( (!pass.length && !email.length) ||  (!pass.length || !email.length) || (!pass.length && !this.validate(email) || (!pass.length || !this.validate(email)))){
            error.email= "Les champs ne sont pas valide";
            error.isError = true;
        }else{
            fetch('',{

                }).then((response) => response.json())
                .then((responseJson)=>{
                    alert(responseJson)
                })
                .catch((error)=>{
                    console.log(error)
                })



        }

        this.setState({
            isError: error.isError,
            error: {
                email : error.email,
                pass: error.pass
            }
        });

    };

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





    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const inputType = "";

        const {
            email,
            pass,
            isError,
            isEditable,
            isSecure,
            error
        } = this.state;

        return (
            <KeyboardAvoidingView style={theme.wrapper} behavior="padding">
            <View style={theme.container}>
                <ScrollView>
                    <Text
                        style={theme.loginHeader}
                    >Go Discovery</Text>

                    {isError && <Text style={theme.error}>{error.email}</Text>}
                    <TextInput
                        placeholder="Email"
                        type="email"
                        style={theme.inputFiled}
                        placeholderTextColor='#f4f4f4'
                        onChangeText={this.emailChangeHandler}
                        ref={(input) => { this.inputs.email= input; }}
                        value={email}
                   />
                    {isError && <Text style={theme.error}>{error.pass}</Text>}
                    <TextInput
                        autoCorrect={false}
                        placeholderTextColor='#f4f4f4'
                        style={theme.inputFiled}
                        placeholder="Mot de passe"
                        secureTextEntry={isSecure}
                        onChangeText={this.passChangeHandler}
                        ref={(input) => { this.inputs.pass= input; }}
                        value={pass}
                    />
                    <TouchableOpacity onPress={this.connection}
                                      style={theme.button}
                    >
                        <Text
                        style={theme.textButton}
                        > Connection </Text>

                    </TouchableOpacity>
                    <Text style={theme.littleText}> Mot de passe oublié ? </Text>
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
    error:{
        textAlign: 'center',
        color: 'red',
        fontWeight: "300",
    }
});
