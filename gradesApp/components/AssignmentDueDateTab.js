import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const AssignmentDueDateTab = (props) => {
    const [assignmentDueDate, setAssignmentDueDate] = useState();

    const handleAddAssignmentDueDate = () => {
        console.log(assignmentDueDate);
    }

    return (
        <View style = {styles.item}>
            <Text style = {styles.itemText1}>{props.title}</Text>
            <TextInput 
            style={styles.input}
            placeholder={props.input}
            onChangeText={assignmentDueDate=>setAssignmentDueDate(assignmentDueDate)}/>

            {/* Change this later - just for testing in terminal
            <TouchableOpacity onPress={() => handleAddAssignmentDueDate()}>
            <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
            </View>
            </TouchableOpacity> */}

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
    input: {
        fontSize: 18,
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 10,
        margin: 10,
        width: 200
    }
});

export default AssignmentDueDateTab