import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Heading,
    Button
} from '@chakra-ui/react'
import Social from './Social'

export default function Footer() {
    return (
        <>
            <Box
                bgColor='#0c1015'
                color='#6e7681'
            >
                <Container as={Stack} maxW={'6xl'} py={12} pb='20'>
                    <SimpleGrid
                        templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
                        spacing={0}>
                        <Stack spacing={4}>
                            <Heading color='white'>GitHub</Heading>
                            <Box>
                                <Text color='white'>Subscribe to The GitHub Insider</Text>
                                <Text fontSize={'sm'}>
                                    Discover tips, technical guides, and best practices in our monthly newsletter for developers.
                                </Text>
                            </Box>
                            <Button w='120px' color='white' border='1px solid #6e7681' variant='outline'>
                                Subscribe
                            </Button>
                        </Stack>
                        <Stack align={'flex-start'}>
                            {/* <ListHeader>Product</ListHeader> */}
                            <Box as="a" href={'#'}>
                                Product
                            </Box>
                            <Box as="a" href={'#'}>
                                Features
                            </Box>
                            <Box as="a" href={'#'}>
                                Security
                            </Box>
                            <Box as="a" href={'#'}>
                                Team
                            </Box>
                            <Box as="a" href={'#'}>
                                Enterprise
                            </Box>
                            <Box as="a" href={'#'}>
                                Customer stories
                            </Box>
                            <Box as="a" href={'#'}>
                                The ReadME Project
                            </Box>
                            <Box as="a" href={'#'}>
                                Pricing
                            </Box>
                            <Box as="a" href={'#'}>
                                Resources
                            </Box>
                            <Box as="a" href={'#'}>
                                Roadmap
                            </Box>
                            <Box as="a" href={'#'}>
                                Compare GitHub
                            </Box>
                        </Stack>
                        <Stack align={'flex-start'}>
                            {/* <ListHeader>Company</ListHeader> */}
                            <Box as="a" href={'#'}>
                                About
                            </Box>
                            <Box as="a" href={'#'}>
                                Press
                            </Box>
                            <Box as="a" href={'#'}>
                                Careers
                            </Box>
                            <Box as="a" href={'#'}>
                                Contact
                            </Box>
                            <Box as="a" href={'#'}>
                                Partners
                            </Box>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <Box as="a" href={'#'}>
                                Help Center
                            </Box>
                            <Box as="a" href={'#'}>
                                Terms of Service
                            </Box>
                            <Box as="a" href={'#'}>
                                Legal
                            </Box>
                            <Box as="a" href={'#'}>
                                Privacy Policy
                            </Box>
                            <Box as="a" href={'#'}>
                                Status
                            </Box>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <Box as="a" href={'#'}>
                                Facebook
                            </Box>
                            <Box as="a" href={'#'}>
                                Twitter
                            </Box>
                            <Box as="a" href={'#'}>
                                Dribbble
                            </Box>
                            <Box as="a" href={'#'}>
                                Instagram
                            </Box>
                            <Box as="a" href={'#'}>
                                LinkedIn
                            </Box>
                        </Stack>
                    </SimpleGrid>
                </Container>
            </Box>
            <Social />
        </>
    )
}