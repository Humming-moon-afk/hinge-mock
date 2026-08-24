import { useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function() {
    const { name, number} = useLocalSearchParams<{ name: string, number: string}>()
    const [adress, setAdress] = useState('')
    const URL = 'http://localhost:8080/api/users'
    
    async function configuration() {
        try {
            const options = { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({name: name, phoneNumber: number, address: adress})}
       const response = await fetch(URL, options)
       response
       const result = await response.json()
       console.log('Server Antworet: ', result)
       alert('Konto erfolgreich erstellt')
       return result
        } catch(error) {

        }
    }
    return(
        <View style = {{paddingTop: 300, alignItems: 'center', gap: 20}}>
            <Text style = {{fontWeight: 'bold', fontSize: 18}}>Wie lautet deine Adresse?</Text>
            <TextInput value={adress} onChangeText={setAdress}
                style = {{fontSize: 12,fontWeight:'bold', borderRadius: 30, backgroundColor:'lightgrey', width: '35%', paddingVertical: 10, paddingHorizontal:10}}
                placeholder='Bitte eingeben...'
            />
            <TouchableOpacity style = {{paddingVertical: 15, paddingHorizontal:10, borderRadius:30, alignItems:'center', backgroundColor: '#A689E1', width: '60%'}} onPress={() => 
                configuration()}>
                <Text style = {{alignContent: 'center', fontSize: 18}}>Registrierung abschließen</Text>
            </TouchableOpacity>
        </View>
    )
}


