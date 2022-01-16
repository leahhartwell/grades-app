import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import NumericInput from 'react-native-numeric-input'

const AssignmentWeightTab = (props) => {
    const [assignmentWeight, setAssignmentWeight] = useState();
    
    const handleAddWeight = () => {
        console.log(assignmentWeight);
    }

    return (
        <View style = {styles.item}>
            <Text style = {styles.itemText1}>{props.title}</Text>
            {/* <TextInput 
            keyboardType='numeric'
            style={styles.input}
            placeholder={props.input}
            OnChangeText={assignmentWeight=>setAssignmentWeight(assignmentWegiht)}/> */}

            <NumericInput
                keyboardType='numeric'
                style={styles.input}
                placeholder={props.input}
                minValue={0}
                maxValue={100}
                rounded={true}
                onChange={assignmentWeight=>setAssignmentWeight(assignmentWeight)}/>


            {/* <TouchableOpacity onPress={() => handleAddWeight()}>
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

export default AssignmentWeightTab