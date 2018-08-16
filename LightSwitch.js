import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const LightSwitch = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[  
                styles.button, 
                props.light ? styles.buttonOn : styles.buttonOff]} onPress={props.switched}>
                <Text style={[
                styles.text, 
                props.light ? styles.textOn : styles.textOff
                ]}>{props.light === 0 ? `Turn On` : `Turn Off`}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    button: {
        flex: 1,
        marginHorizontal: '10%',
        marginVertical: '10%',
        paddingHorizontal: 25,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonOn: {
        backgroundColor: '#FFF176',
    },
    buttonOff: {
        backgroundColor: '#455A64',
    },
    text: {
        textAlign: 'center',
        fontSize: 80,
    },
    textOn: {
        color: 'black',
    },
    textOff: {
        color: 'white',
    }
});

export default LightSwitch;