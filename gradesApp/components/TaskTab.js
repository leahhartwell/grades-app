import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import NumericInput from 'react-native-numeric-input'

const TaskTab = (props) => {
    const [assignmentName, setAssignmentName] = useState();
    const [assignmentWeight, setAssignmentWeight] = useState();
    const [assignmentDueDate, setAssignmentDueDate] = useState();
    const [assignmentGrade, setAssignmentGrade] = useState();

    return (
        <View style = {styles.item}>
            <View style = {styles.itemTop}> 
                <TextInput 
                    style={styles.itemText1}
                    placeholder={props.placeholderName}
                    onChangeText={assignmentName=>setAssignmentName(assignmentName)}
                />
                <TextInput 
                    style={styles.itemText3}
                    placeholder={props.placeholderWeight}
                    onChange={assignmentWeight=>setAssignmentWeight(assignmentWeight)}
                    />
                    {/* <Text style = {styles.itemText3}>
                    <Text>{" "}</Text>
                    <Text style = {styles.innerText}>WT</Text>
                    </Text> */}
            </View>
            <View style = {styles.itemBottom}> 
                <TextInput 
                    style={styles.itemText2}
                    placeholder={props.placeholderDate}
                    onChangeText={assignmentDueDate=>setAssignmentDueDate(assignmentDueDate)}
                />
                <TextInput 
                    style={styles.itemText4}
                    placeholder={props.placeholderGrade}
                    onChange={assignmentGrade=>setAssignmentGrade(assignmentGrade)}
                    />
                    {/* <Text style = {styles.itemText4}>
                        <Text>{"  "}</Text>
                        <Text style = {styles.innerText}>GR</Text>
                    </Text> */}
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

export default TaskTab