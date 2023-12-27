import React from "react";
import { StyleSheet, View, Text } from "react-native-web";

export default function Header(){
    return(
        <View style={styles.main}>
            <Text style={styles.text}> Список дел </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    text:{
        color: "black", 
        fontSize: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 50,
    },
});