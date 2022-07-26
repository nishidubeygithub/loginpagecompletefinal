import React from "react";
import {TextInput, StyleSheet} from "react-native";

const TextInputComponent = (props) => {
    return (
        <TextInput 
        style={props.style}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        autoCapitalize={props.autoCapitalize}
        onChangeText={props.onChangeText}>
            </TextInput>
    )
}
export default TextInputComponent;