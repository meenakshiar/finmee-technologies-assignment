import { Flex, Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { TfiBag } from 'react-icons/tfi'

// Productivity component for rendering the productivity section
const Productivity = () => {
    return (
        <>
            <Flex ml='9%'>
                <TfiBag fontSize={'26px'} color='#e1e6e2' />
                <Box p='0 2%'
                    data-aos="fade-right"
                >
                    <Heading
                        fontSize='28px'
                        fontWeight='600'
                        color='white'
                        mb='2%'
                    >
                        Productivity
                    </Heading>
                    <Heading
                        fontSize='48px'
                        fontWeight='600'
                        color='white'
                        lineHeight='1.1'
                    >
                        <span style={{ color: '#7ee787' }} >
                            Accelerate high-quality software <br /> development.
                        </span>
                        {' '} Our AI-powered platform <br /> drives innovation with tools that boost <br /> developer velocity.
                    </Heading>
                </Box>
            </Flex>
        </>
    )
}

export default Productivity
