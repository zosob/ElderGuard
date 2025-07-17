import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { isSpam } from '../services/spamDetector';
import colors from '../constants/colors';
import * as Speech from 'expo-speech';

export default function ChatbotScreen() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleCheckSpam = () => {
        let message = '';
        if(!input.trim()) {
            message = "Please enter a message first!";
            return;
        }
        if (isSpam(input)){
            message = "This message might be a scam!";
        } else {
            message = "This message looks safe";
        }
        setResponse(message);
        Speech.speak(message);
    };


    return (
        <ScrollView contentContainerStyle = { styles.container}>
            <Text style={styles.title}>Spam checker</Text>
            <TextInput
                style = {styles.input}
                placeholder="Paste text message here"
                placeholderTextColor={colors.detail}
                multiline
                value = {input}
                onChangeText={setInput}
            />

            <View style={styles.buttonContainer}>
                <Button title = "Check Message" color={colors.primary} onPress={handleCheckSpam} />
            </View>

            <Text style={[styles.response, response.includes('scam') ? styles.alert : styles.safe]}>{response}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flexGrow: 1, 
        justifyContent: 'center', 
        padding: 20,
        backgroundColor: colors.background,
    },
    title: { 
        fontSize: 28, 
        marginBottom: 20, 
        textAlign: 'center',
        color: colors.primary,
        fontWeight: 'bold',
    },
    input: {
        borderColor: '#999', 
        borderWidth: 1, 
        borderRadius: 8,
        padding: 12, 
        marginBottom: 20, 
        fontSize: 18, 
        minHeight: 120,
        backgroundColor: '#fff',
        color: '#000',
    },
    buttonContainer: {
        marginBottom: 20,
    },
    response: {
        marginTop: 20, 
        fontSize: 20, 
        fontWeight: 'bold',
        padding: 12,
        borderRadius: 10,
        textAlign: 'center',
    },
    alert: {
        color: '#fff',
        backgroundColor: colors.alert,
    },
    safe: {
        color: '#000',
        backgroundColor: colors.accent,
    },
}); 