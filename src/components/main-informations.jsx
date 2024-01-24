import React, { useEffect, useState } from 'react'
import { Box, Text } from '@chakra-ui/react';
import useLocation from '../hooks/useLocation';
import { useSelector } from 'react-redux';
import { Skeleton } from '@chakra-ui/react'
import { MONTHS, WEEKS } from '../helpers';

export const MainInformations = () => {
    const { locationAccess } = useLocation();
    const { loading, weather } = useSelector(state => state.weather)
    const [currentTime, setCurrentTime] = useState(new Date());
    const date = new Date();
    const year = date.getFullYear();
    const week = WEEKS[date.getDay()];
    const month = MONTHS[date.getMonth()].toUpperCase();


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    return !loading && locationAccess ? (
        <Box display={'flex'} alignItems={'center'}>
            <Text
                fontSize={{ base: "50px", md: "100px", lg: "130px" }}
                color={'white'}
            >{weather.main.temp}°</Text>
            <Box marginLeft={5}>
                <Text
                    fontSize={{ base: "30px", md: "40px", lg: "50px" }}
                    color={'white'}
                >{weather.name}</Text>
                <Text
                    fontSize={17}
                    color={'white'}
                >{formattedTime} - {week}, {date.getDate()} {month} {year}</Text>
            </Box>
        </Box>
    ) : (
        <Box>
            <Skeleton
                width={'50%'}
                height={'100px'}
                marginBottom={{ md: '45px', base: '10px' }}
            />
        </Box>
    );
};
