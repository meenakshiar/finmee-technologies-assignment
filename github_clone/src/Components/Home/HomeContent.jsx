import {
    Flex, Box, Image, Heading, Text, Input, InputGroup, InputRightAddon,
    Divider,
    Center
} from '@chakra-ui/react'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

const HomeContent = () => {
    return (
        <>
            <Box
                mt='32%'
                ml='-38%'
            >
                <Flex
                    gap='12px'
                    color='white'
                    display='flex'
                    placeItems='center'
                    borderRadius='60px'
                    border='1px solid #6e7681'
                    w='520px'
                    h='70px'
                    p='10px 15px'
                >
                    <Image
                        w='50px'
                        h='50px'
                        src='https://github.githubassets.com/images/modules/site/universe/eyebrow-23@2x.png?width=44&format=webpll' />
                    <Heading fontSize='16px' lineHeight='5'>
                        GitHub Universe: Dive in to AI, security, and DevEx
                        <Text fontWeight='400' color='#6e7681'>Get your tickets now to join us on Nov. 8-9.</Text>
                    </Heading>
                    <BiChevronRight mt='10px' fontSize={'24px'} />
                </Flex>

                <Heading
                    color='white'
                    fontSize='80px'
                    lineHeight='130px'
                    fontWeight='600'
                >
                    Let's build from here
                </Heading>
                <Heading
                    color='#6e7681'
                    fontSize='32px'
                    lineHeight='50px'
                    fontWeight='500'
                >
                    The AI-powered developer platform to build, scale, and deliver secure software.
                </Heading>

                <Flex gap='25px' p='30px 0'>
                    <InputGroup
                        size='lg'
                        w='600px'
                    >
                        <Input
                            bgColor='white'
                            placeholder='Email address'
                        />
                        <InputRightAddon
                            color='white'
                            border='none'
                            bgColor='#753ec6'
                            fontWeight='600'
                            children='Sign up for GitHub'
                        />
                    </InputGroup>

                    <Center height='50px'>
                        <Divider orientation='vertical' />
                    </Center>

                    <InputGroup
                        size='lg'
                    >
                        <InputRightAddon
                            color='white'
                            border='1px solid #753ec6'
                            bgColor='transparent'
                            fontWeight='600'
                            children='Start a free enterprise trial >'
                        />
                    </InputGroup>
                </Flex>
            </Box>
        </>
    )
}

export default HomeContent