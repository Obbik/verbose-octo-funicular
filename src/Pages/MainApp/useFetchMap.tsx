import React, {useEffect, useState} from 'react'
import locations from "../../mock/location.json"

const useFetchMap = () => {

    const [location, setLocation] = useState<any>([])

    const fetchLocation = () => {
        setLocation(locations)
    }

    
    useEffect(() => {
        fetchLocation()
    }, [])
    

    return {location}
}

export default useFetchMap