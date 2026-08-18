import { Text, View } from 'react-native'


export default function() {
  return(
    <View style ={{justifyContent: 'center', flex: 1, alignItems:'center', gap: 5}}>
      <Text style = {{fontSize: 50}}>Hinge</Text>
      <Text style = {{fontSize: 18}}>Designed to be deleted</Text>
    </View>
  )
}






// flexDirection: Richtung der Hauptachse ('column' = vertikal, 'row' = horizontal)
// justifyContent: Ausrichtung auf der Hauptachse ('center', 'space-between', ...)
// alignItems: Ausrichtung auf der Querachse ('center', 'stretch', ...)
// gap: Fester Abstand zwischen Kind-Elementen
// padding: Innenabstand (Platz innerhalb der Box)
// margin: Außenabstand (Abstand zu Nachbar-Boxen)
// flex: 1: Füllt den gesamten verfügbaren Bildschirmplatz aus