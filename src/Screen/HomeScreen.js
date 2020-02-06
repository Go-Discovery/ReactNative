import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';


// eslint-disable-next-line react/prefer-stateless-function
export default class HomeScreen extends React.Component {
  render() {
    const {navigate} =this.props.navigation;
    return (

        <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View style={styles.container}>
          <Text style={styles.loginHeader}>Bienvenue sur Go Discovery</Text>
            <TouchableOpacity onPress={()=>
              navigate('Singin')
            } style={styles.button}>
               <Text style={styles.text}> S'inscrire  </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigate('Login')}
                style={styles.button}
            >
              <Text style={styles.text}> Se connecter </Text>
            </TouchableOpacity>

        </View>
       </KeyboardAvoidingView>
    );
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
    padding : 20
  },
  text: {
    textAlign: 'center',
    color: '#f4f4f4',
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
    backgroundColor: '#df7599',
    padding : 10,
    margin : 20

  },
});


