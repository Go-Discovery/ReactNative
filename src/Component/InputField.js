import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
class InputField extends Component {
    render() {
        const { labelText } = this.props;
        return (
            <View style={styles.wrapper}>
                <Text>{labelText}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        display: "flex"
    }
});
export default InputField;
