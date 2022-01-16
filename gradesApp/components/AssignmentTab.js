import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const AssignmentTab = (props) => {

    return (
        <View style = {styles.item}>
            <Text style = {styles.itemText1}>{props.title}</Text>
            <TextInput 
            style={styles.input}
            placeholder={props.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#AFCBEC',
        borderRadius: 10,
        width: "100%",
        marginBottom: 20
    },
    itemText1:{
        fontSize: 16,
        fontWeight: "bold",
        paddingTop: 10,
        paddingHorizontal: 20
    },
    // itemText2:{
    //     fontSize: 24,
    //     paddingBottom: 10,
    //     paddingHorizontal: 20
    // },
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        fontSize: 18,
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 10,
        margin: 10,
        width: 200
    }
});

export default AssignmentTab