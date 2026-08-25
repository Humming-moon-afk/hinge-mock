import { useLocalSearchParams, useRouter } from "expo-router"
import { useState } from "react"
import { Text, View } from "react-native"




export default function dating(){
    const {userId} = useLocalSearchParams<{userId: string}>()
    const preferences = ['Männlich', 'Weiblich', 'Beide']
    const [preference, setPreference] = useState('')
    const router = useRouter()
    return(
        <View style = {{alignItems:'center', gap:20, paddingTop: 200}}>
            <Text style = {{fontWeight:'bold', fontSize:18}}>
                Dating Präferenzen
            </Text>
            <Text style = {{fontWeight:'condensed', fontSize:15}}>
                Wen möchtest du daten?
            </Text>
        </View>
    )
}