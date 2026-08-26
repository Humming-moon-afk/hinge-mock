import { useLocalSearchParams, useRouter } from "expo-router"
import { useState } from "react"



export default function Relationship() {
    const router = useRouter()
    const [relationship, setRelationship] = useState('')
    const { userId, preference} = useLocalSearchParams<{userId: string, preference: string}>()
    const datingPreferences = ['Langfristig', 'Kurzfristig', 'Langfristig, offen für kurzfristig', 'Kurzfristig, offen für langfristig']
    return(

    )
}