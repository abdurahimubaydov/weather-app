import { Box, Skeleton, Text } from '@chakra-ui/react';
import React from 'react';
import WeatherForecastCard from './weather-forecast-card';
import { useSelector } from 'react-redux';

export default function WeatherForecast() {
    const { forecast } = useSelector(state => state.weather)

    return (
        <Box width={'100%'} display={'flex'} flexDirection={'column'}>

            <Text fontSize={'25px'} color={'white'} fontWeight={'500'} marginBottom={10}>Weather Forecast</Text>

            {forecast ? forecast.map((item, index) => (
                <WeatherForecastCard
                    item={item}
                    key={index}
                />
            )) : (
                <Box>
                    <Skeleton marginBottom={10} width={'100%'} height={'58px'} />
                    <Skeleton marginBottom={10} width={'100%'} height={'58px'} />
                    <Skeleton marginBottom={10} width={'100%'} height={'58px'} />
                    <Skeleton marginBottom={10} width={'100%'} height={'58px'} />
                    <Skeleton marginBottom={10} width={'100%'} height={'58px'} />
                </Box>
            )}

        </Box >
    );
};
