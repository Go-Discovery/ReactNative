import React from 'react';

import {
  View, Text, Button, TouchableOpacity,
} from 'react-native';


export default class Connection extends React.Component {
  constructor(props) {
    super(props);
    this.input = {};
    this._state = {
      login: '',
      password: '',
      error: ''
    };
  }

  loginChangeHandler(email) => {
    this.setState({
      login: email
    });
  }

  passwordChangeHandler(newPassword)=>{
    this.setState({
      password:newPassword
    });
}


  get state() {
    return this._state;
  }


  connection = async => {
    const {login, password} = this.state;
    if (!login.length || !password.length){
      this.setState({ error: 'Veuillez renseigner votre adesse email et votre mot de passe.' });
    }else{
      try {
       s
      }
    }
  }

}
