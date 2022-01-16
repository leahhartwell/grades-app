import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const ColourBlock = (props) => {
    return (
        <View style={
            {
                width: 40,
                height: 40,
                backgroundColor: props.colour,
                opacity: 0.5,
                borderRadius: 5,
                marginRight: 15,
            }
        }></View>
    )
}

export default ColourBlock;