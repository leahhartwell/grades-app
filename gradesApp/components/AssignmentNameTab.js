import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const AssignmentNameTab = (props) => {
    const [assignmentName, setAssignmentName] = useState();

    const handleAddAssignmentName = () => {
        console.log(assignmentName);
    }

    return (
        <View style = {styles.item}>
            <Text style = {styles.itemText1}>{props.title}</Text>
            <TextInput 
            style={styles.input}
            placeholder={props.input}
            onChangeText={assignmentName=>setAssignmentName(assignmentName)}/>

        {/* Change this later - just for testing in terminal */}
        {/* <TouchableOpacity onPress={() => handleAddAssignmentName()}>
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
        paddingTop: 10,
        paddingHorizontal: 20
    },
    input: {
        fontSize: 20,
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 10,
        margin: 10,
        width: "100%"
    }
});

export default AssignmentNameTab