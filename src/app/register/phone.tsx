import { useLocalSearchParams, useRouter } from "expo-router"
import { useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
export default function() {
    const { name } = useLocalSearchParams<{ name: string}>()
    const [number, setNumber] = useState('')
    const router = useRouter()
    return(
        <View style = {{paddingTop: 300, alignItems: 'center', gap: 20}}> 
            <Text style = {{fontWeight: 'bold', fontSize: 18}}>Wie lautet deine Telefonnummer?</Text>
            <TextInput value={number} onChangeText={setNumber}
                style= {{fontSize: 12,fontWeight:'bold', borderRadius: 30, backgroundColor:'lightgrey', width: '35%', paddingVertical: 10, paddingHorizontal:10}}
                placeholder="Bitte eingeben..."
            />
            <TouchableOpacity style = {{paddingVertical: 15, paddingHorizontal:10, borderRadius:30, alignItems:'center', backgroundColor: '#A689E1', width: '40%'}}
            onPress={() => router.push({
            pathname: '/register/address',
            params: {name, number}
            })}
            >
                <Text style = {{alignContent: 'center', fontSize: 18}}>Weiter</Text>
            </TouchableOpacity>
        </View>
    )
}
