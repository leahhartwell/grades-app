import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AssignmentTab = (props) => {

    return (
        <View style = {styles.item}>
            <View style = {styles.itemLeft}> 
                <Text style = {styles.itemText1}>{props.title}</Text>
                <Text style = {styles.itemText2}>{props.input}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#AFCBEC',
        borderRadius: 10,
        width: "100%",
        height: 75,
        marginBottom: 20
    },
    itemText1:{
        fontSize: 16,
        paddingTop: 8,
        paddingHorizontal: 20
    },
    itemText2:{
        fontSize: 24,
        paddingBottom: 10,
        paddingHorizontal: 20
    },
});

export default AssignmentTab