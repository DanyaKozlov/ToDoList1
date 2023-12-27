import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ el }) {
    return (
        <TouchableOpacity>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    text: {
        fontSize: 20,
        padding: 20,
        textAlign: "center",
        borderRadius: 5,
        color: "white", 
        backgroundColor: "#AA96DA",
        marginTop: 10,
        margin: '0 ',
        width: '30%',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});