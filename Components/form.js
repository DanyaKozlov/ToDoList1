import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { Button } from "react-native-web";

export default function form({addHandler, deleteAllHandler}) {
    const [text, setValue] = useState("");
    const onChange = (text) => {
    setValue(text);
    };


    return (
        <View style={styles.input}>
            <TextInput onChangeText={onChange} placeholder="Впишите задачу..."   placeholderTextColor="#828282"
            style={{borderWidth: 1, borderColor: '#7b5cc5', borderRadius: 5, padding: 10, marginBottom: 20  }} />
            <Button color="#AA96DA" onPress={()=> addHandler(text)} title='Добавить задачу'></Button>
            <Button color="#7b5cc5" onPress={() => deleteAllHandler()} title="Удалить задачи"> </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        outline: 0,
        textAlign: "center",
        paddingBottom: 20,
        width: "40%",
        borderBottomWidth: 2,
        borderColor: '#AA96DA',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});