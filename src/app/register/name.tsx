import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function() {
    const [name, setName] = useState('')
    return(
    <View style={{paddingTop: 300, alignItems: 'center', gap: 20}}>
        <Text style = {{fontSize: 18, fontWeight: 'bold'}}>Wie lautet dein Name?</Text>
        <TextInput value={name} onChangeText={setName}
            style = {{fontSize: 12,fontWeight:'bold', borderRadius: 30, backgroundColor:'lightgrey', width: '35%', paddingVertical: 10, paddingHorizontal:10}}
            placeholder='Bitte eingeben...'
        />
    <TouchableOpacity style = {{paddingVertical: 15, paddingHorizontal:10, borderRadius:30, alignItems:'center', backgroundColor: '#A689E1', width: '40%'}}>
        <Text style = {{alignContent: 'center', fontSize: 18}}>Weiter</Text>
    </TouchableOpacity>
    </View>
    
    )
}