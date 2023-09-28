import {
    Box,
    Heading,
    Stack,
    Button,
    Center,
    Image,
    Grid,
    Text
} from '@chakra-ui/react'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

const Astrocat = () => {
    return (
        <>
            <Box
                w={'full'}
                h={'190vh'}
                backgroundImage={
                    'url(https://github.githubassets.com/images/modules/site/home-campaign/footer-galaxy.jpg)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
                textAlign='center'
            >
                <Heading
                    color='white'
                    fontSize='48px'
                    fontWeight='800'
                >
                    The place for anyone from anywhere <br /> to build anything
                </Heading>
                <br />
                <Heading
                    color='#6e7681'
                    fontSize='20px'
                    lineHeight='30px'
                    fontWeight='500'
                >
                    Whether you’re scaling your startup or just learning how to code, GitHub is <br /> your home. Join the world’s largest developer platform to build the <br /> innovations that empower humanity. Let’s build from here.
                </Heading>

                <Center m='4% 1%'>
                    <Stack direction='row' spacing={2} align='center' _hover={{}} >
                        <Button p='25px 45px' bg='white' variant='solid' fontSize='20px' fontWeight='600'>
                            Sign up for GitHub <BiChevronRight mt='10px' fontSize={'24px'} />
                        </Button>
                        <Button p='25px 45px' bg='transparent' variant='outline' fontSize='20px' color='white' _hover={{}}>
                            Start a free enterprise trial <BiChevronRight fontSize={'24px'} />
                        </Button>
                    </Stack>
                </Center>

                <Grid display='grid' placeItems='center'>
                    <Image w='40%' src='https://github.githubassets.com/images/modules/site/home/globe.jpg?width=742' />
                    <Image w='28%' mt='-17%' src='https://github.githubassets.com/images/modules/site/home-campaign/astrocat.png' />
                </Grid>

                <Text
                    color='#6e7681'
                    fontSize='14px'
                    fontWeight='500'
                    textAlign='left'
                    m='4% 13%'
                >
                    1 The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced Security, a commissioned study conducted by Forrester <br /> Consulting, 2022. Results are for a composite organization based on interviewed customers. <br />
                    2 GitHub, Octoverse 2022 The state of open source software.
                </Text>
            </Box>
        </>
    )
}

export default Astrocat;