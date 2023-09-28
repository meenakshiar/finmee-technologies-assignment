import {
    Flex,
    Box,
    Text,
    Image
} from '@chakra-ui/react'
import React from 'react'
import { BsCode } from 'react-icons/bs'


const Organization = () => {
    return (
        <>
            <Flex ml='9%'>
                <BsCode fontSize={'35px'} color='#753ec6' />
                <Box p='9.5% 2%'>
                    <Text
                        fontSize='16px'
                        fontWeight='400'
                        color='#6e7681'
                        mb='4%'
                    >
                        Trusted by the world’s leading organizations ↘︎
                    </Text>
                    <Flex gap='50px'>
                        <Image w='100px' src='https://github.githubassets.com/images/modules/site/home-campaign/logos/stripe.svg' />
                        <Image src='https://github.githubassets.com/images/modules/site/home-campaign/logos/pinterest.svg' />
                        <Image src='https://github.githubassets.com/images/modules/site/home-campaign/logos/kpmg.svg' />
                        <Image h='50px' src='https://github.githubassets.com/images/modules/site/home-campaign/logos/mercedes.svg' />
                        <Image src='https://github.githubassets.com/images/modules/site/home-campaign/logos/pg.svg' />
                        <Image src='https://github.githubassets.com/images/modules/site/home-campaign/logos/telus.svg' />
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}

export default Organization