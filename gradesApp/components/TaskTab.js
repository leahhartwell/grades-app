import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TaskTab = () => {

    return (
        <View style = {styles.item}>
            <View style = {styles.itemLeft}> 
                <Text style = {styles.itemText1}>Assignment 1</Text>
                <Text style = {styles.itemText2}>Due: Jan 31</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#EDCBB3',
        borderRadius: 10,
        width: "100%",
        height: 75
    },
    itemText1:{
        fontSize: 24,
        fontWeight: "bold",
        paddingTop: 8,
        paddingHorizontal: 20
    },
    itemText2:{
        fontSize: 18,
        fontWeight: "bold",
        paddingBottom: 10,
        paddingHorizontal: 20
    },
});

export default TaskTab