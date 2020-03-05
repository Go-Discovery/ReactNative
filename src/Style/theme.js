import {
    StyleSheet,
} from 'react-native';


const theme = StyleSheet.create({
    wrapper: {
        display: "flex",
        flex: 1,
        backgroundColor: '#457B9D'
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
        color: '#457B9D',
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
        backgroundColor: '#f1faee',
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

export default theme
