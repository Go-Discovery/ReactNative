import * as React from 'react'

import {
    View,
    Text,
    PermissionsAndroid,
    Platform,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'

import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';

export default class extends React.Component {

    state = {
        currentLongitude: 0,//Initial Longitude
        currentLatitude: 0,
        region: {
            currentLongitude: 0,//Initial Longitude
            currentLatitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0,
        },
};



    onRegionChange(region) {
        this.setState({ region });
    }

    componentDidMount = () => {
        var that = this;
        //Checking for the permission just after component loaded
        if(Platform.OS === 'ios'){
            this.callLocation(that);
        }else{
            async function requestLocationPermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
                            'title': 'Localisation Accès requis',
                            'message': 'Cette application doit accéder à votre localisation'
                        }
                    )
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //To Check, If Permission is granted
                        that.callLocation(that);
                    } else {
                        alert("Permission Refusé");
                    }
                } catch (err) {
                    alert("err",err);
                    console.warn(err)
                }
            }
            requestLocationPermission();
        }
    }
    callLocation(that){
        //alert("callLocation Called");
        Geolocation.getCurrentPosition(
            //Will give you the current location
            (position) => {
                const currentLongitude = JSON.stringify(position.coords.longitude);
                //getting the Longitude from the location json
                const currentLatitude = JSON.stringify(position.coords.latitude);
                //getting the Latitude from the location json
                that.setState({ currentLongitude:currentLongitude });
                //Setting state Longitude to re re-render the Longitude Text
                that.setState({ currentLatitude:currentLatitude });
                //Setting state Latitude to re re-render the Longitude Text
                that.setState({
                    region:{
                        longitude:currentLongitude,
                        latitude:currentLatitude
                    }
                })
            },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        that.watchID = Geolocation.watchPosition((position) => {
            //Will give you the location on location change
            console.log(position);
            const currentLongitude = JSON.stringify(position.coords.longitude);
            //getting the Longitude from the location json
            const currentLatitude = JSON.stringify(position.coords.latitude);
            //getting the Latitude from the location json
            that.setState({ currentLongitude:currentLongitude });
            //Setting state Longitude to re re-render the Longitude Text
            that.setState({ currentLatitude:currentLatitude });
            //Setting state Latitude to re re-render the Longitude Text

        });

    }
    componentWillUnmount = () => {
        Geolocation.clearWatch(this.watchID);
    };

    render() {
        return (
            <View style={styles.container}>
            <MapView
                style={styles.mapStyle}
               />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
