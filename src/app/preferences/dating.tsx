import { useLocalSearchParams } from "expo-router"
import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
export default function Dating() {
    const {userId} = useLocalSearchParams<{userId: string}>()
    const [preference, setPreference] = useState('')
    return(
        <View style = {{alignItems: 'center', paddingTop: 300, gap: 20}}>
            <Text style = {{fontSize: 18, fontWeight:'bold'}}>Dating Präferenzen</Text>
            <Text style = {{fontSize:15, fontWeight:'light'}}>Welches Geschlecht bevorzugst du?</Text>
            <TouchableOpacity>
                
            </TouchableOpacity>
        </View>
    )
}