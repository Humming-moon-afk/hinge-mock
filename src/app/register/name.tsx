import { Text, View } from 'react-native'

export default function() {
    return(
    <View style={{flex: 1, justifyContent:'center', alignItems:'center', paddingBottom: 100, gap: 30}}>
        <Text style = {{fontSize: 15}}>Wie lautet dein Name?</Text>
        <Text style = {{fontSize: 12, borderRadius: 30, backgroundColor:'lightgrey', width: '35%', paddingVertical: 10, paddingHorizontal:10}}>Bitte eingeben...</Text>
    </View>
    )
}