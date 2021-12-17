import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { registerUser } from '../../Firebase';


export default function Register(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    
    async function PressButton() {
        await registerUser(email, password);
    }

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Email' 
                value={email} 
                onChangeText={setEmail} 
            />
            <TextInput 
                placeholder='Password' 
                value={password} 
                secureTextEntry={true} 
                onChangeText={setPassword} 
            />
            <Button 
                title='Register' 
                //disabled={!email && !password}
                onPress={PressButton}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });