import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import NumericInput from 'react-native-numeric-input'

const AssignmentGradeTab = (props) => {
    const [assignmentGrade, setAssignmentGrade] = useState();
    
    const handleAddGrade = () => {
        console.log(assignmentGrade);
    }

    return (
        <View style = {styles.item}>
            <Text style = {styles.itemText1}>{props.title}</Text>

            <NumericInput
                keyboardType='numeric'
                style={styles.input}
                placeholder={props.input}
                minValue={0}
                maxValue={100}
                onChange={assignmentGrade=>setAssignmentGrade(assignmentGrade)}/>


            <TouchableOpacity onPress={() => handleAddGrade()}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                    </View>
            </TouchableOpacity>
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

export default AssignmentGradeTab