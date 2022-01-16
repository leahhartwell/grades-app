import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TaskTab = () => {

    return (
        <View style = {styles.item}>
            <View style = {styles.itemLeft}> 
                <Text sytle = {styles.itemText}>BEEEEEEEEEEEN</Text>
            </View>
            <View style = {styles.itemRight}>
                <Text sytle = {styles.itemText}>OY!</Text>
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
    itemLeft:{},
    itemText:{},
    itemRight:{},
});

export default TaskTab