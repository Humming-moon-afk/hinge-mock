import { useLocalSearchParams, useRouter } from "expo-router"
import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

export default function Dating() {
    const { userId } = useLocalSearchParams<{ userId: string }>()
    const preferences = ['Männlich', 'Weiblich', 'Beide']
    const [preference, setPreference] = useState('')
    const router = useRouter()

    return (
        <View style={{ alignItems: 'center', gap: 20, paddingTop: 200 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                Dating Präferenzen
            </Text>
            <Text style={{ fontSize: 15 }}>
                Wen möchtest du daten?
            </Text>

            <View style={{ width: '80%', gap: 10 }}>
                {preferences.map((item) => {
                    const isSelected = preference === item

                    return (
                        <TouchableOpacity 
                            key={item} 
                            onPress={() => setPreference(item)}
                            style = {{
                                padding: 15,
                                borderRadius: 20,
                                borderWidth: 1.5,
                                alignItems:'center',
                                borderColor: isSelected ? '#A689E1' : '#E0E0E0',
                                backgroundColor: isSelected ? '#F3EEFF' : '#FFFFFF'
                            }}
                        >
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}