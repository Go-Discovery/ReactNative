import React from 'react'

import {Text,FlatList,StyleSheet,View,Image,TextInput} from 'react-native'
import BarItem from '../Component/barItemHome';
import data from '../node/data'
import {getFilmsFromApiWithSearchedText} from '../node/api';

export default class RouteScreen extends React.Component {
    constructor(props) {
        super(props)
        this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
        this.state = {
            data: []
        }
    }
    _load() {
        if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
                this.setState({ data: data.results })
            })
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.textinput} placeholder='Recherche'/>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) =>
                        <View>
                            <BarItem data={item}/>
                    </View>}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },textinput:{
        padding: 5,
        borderWidth: 0.5,
        borderColor: "#694fad",
        borderRadius: 100
    }
})


