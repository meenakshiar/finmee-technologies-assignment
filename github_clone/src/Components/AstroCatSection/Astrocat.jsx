import {
    // Import Chakra UI components
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
        // Start of the section
        <>
            {/* Background container */}
            <Box
                w={'full'}
                h={'190vh'} // Setting the container height
                backgroundImage={
                    'url(https://github.githubassets.com/images/modules/site/home-campaign/footer-galaxy.jpg)' // Background image
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
                textAlign='center'
            >
                {/* Main Title */}
                <Heading
                    color='white'
                    fontSize='48px'
                    fontWeight='800'
                >
                    The place for anyone from anywhere <br /> to build anything
                </Heading>
                <br />
                {/* Description */}
                <Heading
                    color='#6e7681'
                    fontSize='20px'
                    lineHeight='30px'
                    fontWeight='500'
                >
                    Whether you’re scaling your startup or just learning how to code, GitHub is <br /> your home. Join the world’s largest developer platform to build the <br /> innovations that empower humanity. Let’s build from here.
                </Heading>

                {/* Buttons */}
                <Center m='4% 1%'> {/* Center-aligning the buttons */}
                    <Stack direction='row' spacing={2} align='center' _hover={{}} >
                        {/* Sign-up button */}
                        <Button p='25px 45px' bg='white' variant='solid' fontSize='20px' fontWeight='600'>
                            Sign up for GitHub <BiChevronRight mt='10px' fontSize={'24px'} /> {/* Right arrow icon */}
                        </Button>
                        {/* Free trial button */}
                        <Button p='25px 45px' bg='transparent' variant='outline' fontSize='20px' color='white' _hover={{}}>
                            Start a free enterprise trial <BiChevronRight fontSize={'24px'} /> {/* Right arrow icon */}
                        </Button>
                    </Stack>
                </Center>

                {/* Grid layout for images */}
                <Grid display='grid' placeItems='center'>
                    {/* Image on the left */}
                    <Image w='40%' src='https://github.githubassets.com/images/modules/site/home/globe.jpg?width=742' />
                    {/* Image on the right (Astronaut cat) */}
                    <Image w='28%' mt='-17%' src='https://github.githubassets.com/images/modules/site/home-campaign/astrocat.png' />
                </Grid>

                {/* Additional information */}
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
        </> // End of the section
    )
}

export default Astrocat;
