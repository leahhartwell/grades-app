import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const TaskTab = () => {

    return (
        <View style = {styles.item}>
            <View style = {styles.itemTop}> 
                <Text style = {styles.itemText1}>Assignment 1</Text>
                <Text style = {styles.itemText3}>
                    5%
                        <Text>{" "}</Text>
                    <Text style = {styles.innerText}>WT</Text>
                </Text>
            </View>
            <View style = {styles.itemBottom}> 
                <Text style = {styles.itemText2}>Due: Jan 31</Text>
                <Text style = {styles.itemText4}>
                    75%  
                        <Text>{"  "}</Text>
                    <Text style = {styles.innerText}>GR</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#EDCBB3',
        borderRadius: 10,
        width: "100%",
        height: 75,
        marginBottom: 15,
        marginTop: 15
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
        fontWeight: "bold",
        paddingBottom: 10,
        paddingLeft: 20
    },
    itemText3:{
        fontSize: 24,
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

export default TaskTab