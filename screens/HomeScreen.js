import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={StyleSheet.container}>
            <Text style={styles.title}>Elder Guard</Text>
            <Button title="Talk to the Bot" onPress={() => navigation.navigate('Chatbot')} />
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 28, marginBottom: 20}
});