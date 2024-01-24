import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function WeatherForecastCard({ item }) {
    const value = item.main.temp;
    const description = item.weather[0].main;
    const time = item.dt_txt;

    const toArray = time.split(' ');

    const slicedTime = toArray[1].slice(0, 5);

    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} marginBottom={10}>
            <Box display={'flex'} flexDirection={'column'}>
                <Text fontSize={'20px'} color={'white'} fontWeight={'500'} marginBottom={'2px'}>{slicedTime}</Text>
                <Text fontSize={'18px'} color={'#BFBFBD'} fontWeight={'500'}>{description}</Text>
            </Box>
            <Text fontSize={'25px'} color={'#BFBFBD'} fontWeight={'500'} marginBottom={'2px'}>{value}°</Text>
        </Box>
    );
};
