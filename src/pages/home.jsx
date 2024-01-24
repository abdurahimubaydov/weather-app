import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/header';
import { MainInformations } from '../components/main-informations';
import { SearchSection } from '../components/search-section';

import { WeatherDetails } from '../components/weather-details';
import WeatherForecast from '../components/weather-forecast-section';

export const Home = () => {
    return (
        <Box
            display={'flex'}
            flexDirection={{ base: 'column', md: 'row' }}
            width={'100%'}
            height={'100vh'}
            background={'#172026'}
        >
            <Box
                width={{ base: '100%', md: '65%' }}
                height={{ base: '45%', md: '100%' }}
                display={'flex'}
                padding={10}
                justifyContent={'space-between'}
                flexDirection={'column'}
            >
                <Header />

                <MainInformations />

            </Box>


            <Box
                width={{ base: '100%', md: '35%' }}
                height={{ base: '55%', md: '100%' }}
                borderLeft={{ md: '5px solid #3A5D64' }}
                borderTop={{ md: 'none', base: '5px solid #3A5D64' }}
                padding={10}
                overflow={'scroll'}
                display={{ base: 'flex', md: 'flex' }}
                flexDirection={'column'}
                textAlign={{ base: 'center', md: 'inherit' }}
            >
                {/* Search section */}
                <SearchSection />

                <Text color={'white'} fontSize={'18px'} fontWeight={'500'} marginTop={10} marginBottom={10}>Weather details</Text>
                {/* Weather Details */}
                <WeatherDetails />

                <Box width={'100%'} height={'1px'} marginTop={10} marginBottom={18} backgroundColor={'white'}></Box>

                <WeatherForecast />
            </Box>


        </ Box >
    );
};
