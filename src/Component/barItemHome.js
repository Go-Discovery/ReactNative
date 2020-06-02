import React from 'react'

import{
    ScrollView,

}from 'react-native'
import {Text,
    View,
    StyleSheet,
    Image,
TextInput} from 'react-native';

export default class BarItem extends React.Component {
    state = {
        name:'',
        loc:'',
        type:'',
    }



    render() {
        const data = this.props.data
        console.log(this.props)
        return(
            <View>
            <View style={styles.main}>

                <View style={styles.container}>
                <Text style={styles.title}>Nom : {data.name}</Text>
                <Text style={styles.loc}> Location  :  {data.loc}</Text>
                <Text style={styles.type}>Type : {data.type}</Text>
                 <Image source={data.uri}></Image>
             </View>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding : 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 7.49,

    },
    container: {
        flex: 1,
        padding : 5,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#694fad",
        backgroundColor : '#694fad'

    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color :'white'
    },
    type:{
        color:'white'
    },
    loc: {
        color: 'white'
    },
    textinput:{

    }
});
