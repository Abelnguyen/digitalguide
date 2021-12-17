import React from 'react'
import { View, Text, Button } from 'react-native'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    
    const navi = useNavigation();
    const handleOut = () => {
        auth
        .signOut()
        .then(() => {
            console.log('Signed Out')
        })
        .catch(error => alert(error.message))
    }

    return (
        <Button
            title='Out' 
            onPress={handleOut}
        />
    )
}
