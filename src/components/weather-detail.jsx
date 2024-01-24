import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export const WeatherDetail = ({ title, value, Icon }) => {
    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            width={'100%'}
            marginBottom={7}
        >
            <Text color={'#ffffffb2'} fontWeight={'500'} fontSize={'18px'}>{title}</Text>
            <Box display={'flex'} alignItems={'center'}>
                <Text
                    textAlign={{ base: 'center', md: 'inherit' }}
                    color={'white'}
                    fontWeight={'500'}
                    fontSize={'18px'}
                    marginRight={5}
                >{value}</Text>
                <Icon />
            </Box>
        </Box>
    );
};