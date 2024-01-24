import React, { useState } from 'react'
import { Input, Text } from '@chakra-ui/react';
import useWeather from '../hooks/useWeather';

export default function Header() {
    const [cityName, setCityName] = useState('')


    const { searchByCity, searchFiveDaysForecast } = useWeather()


    return (
        <form
            onSubmit={e => {
                searchByCity(e, cityName)
                searchFiveDaysForecast(e, cityName)
            }}
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >

            <Text
                fontSize={{ base: "24px", md: "40px" }}
                color={'#F2E3D5'}
            >Weather</Text>

            <Input
                width={{ base: '150px', sm: '200px' }}
                display={{ base: 'flex', md: 'none' }}
                color={'white'}
                placeholder='Search location...'
                borderBottom={'1px solid white'}
                variant={'unstyled'}
                borderRadius={0}
                outline={'none'}
                style={{ outline: 'none' }}
                paddingTop={2}
                paddingBottom={2}
                fontSize={20}
                fontWeight={500}
                // functions
                value={cityName}
                onInput={e => setCityName(e.target.value)}
            />
        </form>
    );
};
