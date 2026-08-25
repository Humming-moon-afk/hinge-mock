import { useLocalSearchParams } from "expo-router"
import { Text, View } from "react-native"
export default function Dating() {
    const {userId} = useLocalSearchParams<{userId: string}>()
    return(
        <View>
            <Text>Dating Präferenzen</Text>
        </View>
    )
}