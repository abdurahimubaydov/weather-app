import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';
import useWeather from '../hooks/useWeather';

export const SearchSection = () => {
    const [cityName, setCityName] = useState('')
    const { searchByCity, searchFiveDaysForecast } = useWeather()
    return (
        <form
            onSubmit={e => {
                searchByCity(e, cityName)
            }}
        >
            <Input
                width={'80%'}
                display={{ base: 'none', md: 'flex' }}
                color={'white'}
                placeholder='Search location...'
                borderRadius={0}
                outline={'none'}
                style={{ outline: 'none' }}
                borderBottom={'1px solid white'}
                variant={'unstyled'}
                _placeholder={'#BABBBA'}
                paddingTop={2}
                paddingBottom={2}
                fontSize={20}
                fontWeight={500}
                value={cityName}
                onInput={e => setCityName(e.target.value)}
            />
        </form>
    );
};
