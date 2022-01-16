import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const CourseTab = (props) => {
    return (
        <View style={styles.CourseTabWrapper}>
            <View style={styles.left}>
                <View style={styles.indicator}></View>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    CourseWrapper: {
        backgroundColor: 'black',
        opacity: 0.9,
        padding: 15,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    indicator: {
        width: 20,
        height: 20,
        backgroundColor: 'white',
        opacity: 0.5,
        borderRadius: 5,
        marginRight: 15,
    },
    text: {
        maxWidth: '90%',
        fontSize: 16,
    },
});

export default CourseTab;