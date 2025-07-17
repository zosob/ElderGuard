import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Elder Guard</Text>
            <Button title="Talk to the Bot" onPress={() => navigation.navigate('Chatbot')} />
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: colors.background, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 20 
    },
    title: { 
        fontSize: 32, 
        color: colors.primary,
        marginBottom: 20,
        textAlign: 'center',
    },
});