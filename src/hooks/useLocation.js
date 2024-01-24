import { useEffect, useState } from 'react'

export default function useLocation() {
    const [myLocation, setMyLocation] = useState({
        latitude: '',
        longitude: '',
    })
    const [locationAccess, setLocationAccess] = useState(false)

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setMyLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });

                setLocationAccess(true)
            },
                (error) => {
                    setLocationAccess(false)
                }
            );
        }
    }, []);

    return { myLocation, locationAccess }
}