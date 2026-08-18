import { Text, View } from 'react-native'


export default function() {
  return(
    <View style ={{justifyContent: 'center', flex: 1, alignItems:'center', gap: 5}}>
      <Text style = {{fontSize: 50}}>Hinge</Text>
      <Text style = {{fontSize: 18}}>Designed to be deleted</Text>
    </View>
  )
}