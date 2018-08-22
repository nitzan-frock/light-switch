import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const LightSwitch = (props) => {
    return (
        <View style={[
                styles.container, 
                props.light ? styles.containerOn : styles.containerOff
            ]}>
            <Text style={[
                styles.description,
                props.light ? styles.textOn : styles.textOff
                ]}>Lights are {props.light ? `on!`: `off!`}</Text>
            <TouchableOpacity style={styles.button} onPress={props.switched}>
                <Text style={styles.text}>
                {props.light ? `Turn Off` : `Turn On`}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '20%'
    },
    containerOn: {
        backgroundColor: '#FFECB3',
    },
    containerOff: {
        backgroundColor: '#455A64',
    },
    button: {
        flex: 1,
        marginHorizontal: '15%',
        marginVertical: '20%',
        paddingHorizontal: 25,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0097A7',
    },
    description: {
        textAlign: 'center',
        fontSize: 50,
    },
    text: {
        textAlign: 'center',
        fontSize: 80,
        color: 'white'
    },
    textOn: {
        color: 'black',
    },
    textOff: {
        color: 'white',
    }
});

export default LightSwitch;