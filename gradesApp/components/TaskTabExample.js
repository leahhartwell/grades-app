import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import NumericInput from 'react-native-numeric-input'

const TaskTabExample = (props) => {

    return (
        <View style = {styles.item}>
            <View style = {styles.itemTop}> 
                    <Text style = {styles.itemText1}>{props.assignment}</Text>
                    <Text style = {styles.itemText3}>{props.weight}</Text>
            </View>
            <View style = {styles.itemBottom}> 
                <Text style = {styles.itemText2}>{props.date}</Text>
                <Text style = {styles.itemText4}>{props.grade}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#EDCBB3',
        borderRadius: 10,
        width: "100%",
        marginBottom: 15
    },
    itemTop:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemBottom:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemText1:{
        fontSize: 24,
        fontWeight: "bold",
        paddingTop: 8,
        paddingLeft: 20
    },
    itemText2:{
        fontSize: 18,
        paddingBottom: 10,
        paddingLeft: 20
    },
    itemText3:{
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 8,
        paddingRight: 20,
    },
    itemText4:{
        fontSize: 18,
        fontWeight: "bold",
        paddingBottom: 10,
        paddingRight: 20,
    },
    innerText:{
        fontSize: 10
    }
});

export default TaskTabExample