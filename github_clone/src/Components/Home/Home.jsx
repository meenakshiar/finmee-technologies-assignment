import {
    Box,
    Image,
    Flex,
} from '@chakra-ui/react'
import React from 'react'
import HomeContent from './HomeContent'
import Organization from '../OrgAndProd/Organization'
import Productivity from '../OrgAndProd/Productivity'

// Home component for rendering the home page
const Home = () => {
    return (
        <>
            {/* Hero section */}
            <Flex
                w={'full'}
                h={'100vh'}
                backgroundImage={
                    'url(https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
                gap='100px'
                p='5%'
            >
                <Flex ml='5%'>
                    <Image src='https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg' />
                    <HomeContent />
                </Flex>
                <Image w='28%' h='33%' src='https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp' />
            </Flex>

            {/* Footer section */}
            <Box
                w={'full'}
                h={'100vh'}
                bgColor='#0c1015'
            >
                <Organization />
                <Productivity />
            </Box>
        </>
    )
}

export default Home
