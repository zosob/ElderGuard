import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { isSpam } from '../services/spamDetector';

export default function ChatbotScreen() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleCheckSpam = () => {
        if(!input.trim()) {
            setResponse("Please enter a message first!");
            return;
        }
        if (isSpam(input)){
            setResponse("This message might be a scam!");
        } else {
            setResponse("This message looks safe");
        }
    };


    return (
        <ScrollView contentContainerStyle = { styles.container}>
            <Text style={styles.title}>Spam checker!</Text>
            <TextInput
                style = {styles.input}
                placeholder="Paste text message here"
                multiline
                value = {input}
                onChangeText={setInput}
            />
            <Button title = "Check Message" onPress={handleCheckSpam} />
            <Text style={styles.response}>{response}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flexGrow: 1, justifyContent: 'center', padding: 20},
    title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
    input: {
        borderColo: '#999', borderWidth: 1, borderRadius: 8,
        padding: 10, marginBottom: 15, fontSize: 18, minHeight: 100
    },
    response: {marginTop: 20, fontSize: 20, fontWeight: 'bold'}
}); 