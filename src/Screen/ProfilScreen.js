import React from 'react'

import {
    View,
    Text
} from 'react-native'


export default class ProfilScreen extends React.Component{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View>
                <Text>
                    Connecté !
                </Text>
            </View>
        )
    }

}
