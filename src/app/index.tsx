import { Text, TouchableOpacity, View } from 'react-native'


export default function() {
  return(
    <View style = {{flex: 1, justifyContent: 'space-between'}}>
      <View style ={{paddingTop: 180, alignItems: 'center', gap: 20}}>
        <Text style = {{fontSize: 50}}>Hinge</Text>
        <Text style = {{fontSize: 18}}>Designed to be deleted</Text>
      </View>
      <View style = {{paddingBottom: 240, alignItems: 'center', gap: 30}}>
        <TouchableOpacity style = {{paddingVertical: 20, paddingHorizontal:10, borderRadius:30, alignItems:'center', backgroundColor: '#A689E1', width: '50%'}}>
          <Text style = {{fontSize: 14, backgroundColor: '#A689E1', fontWeight: 'bold'}}>Konto erstellen</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style = {{fontSize: 14}}>Anmelden</Text>
        </TouchableOpacity>
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