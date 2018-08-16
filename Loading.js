import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Loading = (props) => {
    return (
        <View style={styles.loading}>
            <Text style={styles.text}>Loading</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 60,
        textAlign: 'center',
        color: 'black'
    }
});

export default Loading;