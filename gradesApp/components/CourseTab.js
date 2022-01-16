import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const CourseTab = (props) => {
    return (
        <View style={styles.CourseTabWrapper}>
            <Text style={styles.text}>{props.text}</Text>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    CourseTabWrapper: {
        backgroundColor: '#C4DADB',
        opacity: 0.9,
        padding: 20,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    text: {
        maxWidth: '90%',
        fontSize: 20,
    },
});

export default CourseTab;