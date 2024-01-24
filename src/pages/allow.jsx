import React, { useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import useLocation from '../hooks/useLocation';
import { useNavigate } from 'react-router-dom';

export const Allow = () => {
    const navigate = useNavigate();
    const { locationAccess } = useLocation();

    useEffect(() => {
        if (locationAccess === true) navigate('/')
    }, [locationAccess])


    return (
        <Box
            width={'100%'}
            height={"100vh"}
            backgroundColor={'#172026'}
            position={'fixed'}
        >
            <Text
                fontSize={{ base: "24px", md: "40px", lg: "50px" }}
                margin={10}
                color={'#F2E3D5'}
            >First, you have to give an access to the location</Text>
        </Box>
    );
};
