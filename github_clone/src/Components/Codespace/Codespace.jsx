import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

const Codespace = () => {
    return (
        <>
            <Flex
                w={'full'}
                h={'100vh'}
                bgColor='#0c1015'
                backgroundImage={
                    'url(https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
            >
                <Image
                    ml='9%'
                    w='5%'
                    src='https://github.githubassets.com/images/modules/site/home-campaign/git-branch-productivity.svg' />
                <Box p='0 2%'>
                    <Heading
                        fontSize='26px'
                        fontWeight='600'
                        color='white'
                        lineHeight='1.3'
                        data-aos="fade-down"
                    >
                        GitHub Codespaces
                        <span style={{ color: '#6e7681' }} >
                            {' '}  offers a complete dev <br /> environment in seconds, so you can code, <br /> build, test, and open pull requests from any <br /> repo anywhere.
                        </span>
                        <br /><br />
                        <Flex placeItems={'center'}>
                            Check out GitHub Codespaces <BiChevronRight fontSize={'24px'} />
                        </Flex>
                    </Heading>
                    <Box mt='18%' w='135px' p='1' textAlign={'center'} borderRadius={'22px'} border={'1px solid #7ee787'}>
                        <Heading
                            fontSize='16px'
                            fontWeight='400'
                            color='#7ee787'
                            lineHeight='1.3'
                        >
                            Did you know?
                        </Heading>
                    </Box>
                    <Heading
                        fontSize='52px'
                        fontWeight='600'
                        color='#7ee787'
                        lineHeight='80px'
                    >
                        22% increase
                    </Heading>
                    <Heading
                        fontSize='26px'
                        fontWeight='600'
                        color='white'
                        lineHeight='1.3'
                    >
                        in developer productivity <br /> after three years with GitHub1
                    </Heading>
                </Box>
                <Box>
                    <Image
                        w='310px' zIndex={'0'} mt='80px' ml='50px' h='170px'
                        boxShadow='dark-lg' rounded='md'
                        src='https://github.githubassets.com/images/modules/site/codespaces/illo-ports.png' />
                    <Image
                        zIndex={'1'} mt='-340px' ml='200px' w='330px' h='270px'
                        boxShadow='dark-lg' rounded='md'
                        src='https://github.githubassets.com/images/modules/site/codespaces/illo-context-menu.png' />
                    <Image
                        w='30px' h='40px' mt='-120px' ml='450px'
                        src='https://github.githubassets.com/images/modules/site/codespaces/illo-cursor.png' />
                </Box>
            </Flex>
        </>
    )
}

export default Codespace