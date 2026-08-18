import { Text, View } from 'react-native'


export default function() {
  return(
    <View style = {{flex: 1, justifyContent: 'space-between'}}>
      <View style ={{paddingTop: 180, alignItems: 'center', gap: 20}}>
        <Text style = {{fontSize: 50}}>Hinge</Text>
        <Text style = {{fontSize: 18}}>Designed to be deleted</Text>
      </View>
      <View style = {{paddingBottom: 240, alignItems: 'center', gap: 30}}>
        <Text style = {{fontSize: 14, backgroundColor: '#A689E1', paddingVertical:10, paddingHorizontal:10, borderRadius:30, width: '30%'}}>Konto erstellen</Text>
        <Text style = {{fontSize: 14}}>Anmelden</Text>
      </View>
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