import React from 'react';
import { Box, Skeleton, Text } from '@chakra-ui/react';
import { WeatherDetail } from './weather-detail';
import { useSelector } from 'react-redux';
import { FaThermometerEmpty } from 'react-icons/fa'
import { WiHumidity } from "react-icons/wi";
import { CiCloud } from "react-icons/ci";
import { FaWind } from "react-icons/fa";

export const WeatherDetails = () => {

    const { weather, loading } = useSelector(state => state.weather)

    return (
        <Box
            width={{ base: '100%', md: '100%' }}
            display={'flex'}
            flexDirection={'column'}
        >

            {weather && !loading ? <Text
                color={'white'}
                fontSize={'19px'}
                fontWeight={'500'}
                marginBottom={10}
            >
                {weather.weather[0].description}</Text> : (
                <Skeleton
                    marginBottom={10}
                    width={'100%'}
                    height={'30px'}
                />
            )}

            <Box
                display={'flex'}
                flexDirection={'column'}
                width={'100%'}
                textAlign={{ base: 'center', md: 'inherit' }}
            >
                {weather && !loading ? <WeatherDetail
                    title={'Temp Max'}
                    value={`${weather.main.temp_max}°`}
                    Icon={() => <FaThermometerEmpty color='rgb(223,161,161)' fontSize={20} />}
                /> : (
                    <>
                        <Skeleton marginBottom={7} width={'100%'} height={'30px'} />
                    </>
                )}

                {weather && !loading ? <WeatherDetail
                    title={'Temp Min'}
                    value={`${weather.main.temp_min}°`}
                    Icon={() => <FaThermometerEmpty color='#6D97CA' fontSize={20} />}
                /> : (
                    <>
                        <Skeleton marginBottom={7} width={'100%'} height={'30px'} />
                    </>
                )}

                {weather && !loading ? <WeatherDetail
                    title={'Humidity'}
                    value={`${weather.main.humidity}%`}
                    Icon={() => <WiHumidity color='#6D97CA' fontSize={25} />}
                /> : (
                    <>
                        <Skeleton marginBottom={7} width={'100%'} height={'30px'} />
                    </>
                )}


                {weather && !loading ? <WeatherDetail
                    title={'Cloudy'}
                    value={`${weather.clouds.all}°`}
                    Icon={() => <CiCloud color='#6D97CA' fontSize={20} />}
                /> : (
                    <>
                        <Skeleton marginBottom={7} width={'100%'} height={'30px'} />
                    </>
                )}

                {weather && !loading ? <WeatherDetail
                    title={'Wind'}
                    value={`${weather.wind.speed} km/h`}
                    Icon={() => <FaWind color='#6D97CA' fontSize={20} />}
                /> : (
                    <>
                        <Skeleton marginBottom={7} width={'100%'} height={'30px'} />
                    </>
                )}

            </Box>
        </Box >
    );
};
