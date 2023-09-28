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
            {/* Footer background */}
            <Box
                bgColor='#0c1015'
                color='#6e7681'
            >
                {/* Container */}
                <Container as={Stack} maxW={'6xl'} py={12} pb='20'>
                    {/* Grid */}
                    <SimpleGrid
                        templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
                        spacing={0}
                    >
                        {/* GitHub section */}
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
                        
                        {/* Product links */}
                        <Stack align={'flex-start'}>
                            <Box as="a" href={'#'}>
                                Product
                            </Box>
                            <Box as="a" href={'#'}>
                                Features
                            </Box>
                            <Box as="a" href={'#'}>
                                Security
                            </Box>
                            {/* ... (other links) */}
                        </Stack>
                        
                        {/* Company links */}
                        <Stack align={'flex-start'}>
                            <Box as="a" href={'#'}>
                                About
                            </Box>
                            <Box as="a" href={'#'}>
                                Press
                            </Box>
                            <Box as="a" href={'#'}>
                                Careers
                            </Box>
                            {/* ... (other links) */}
                        </Stack>
                        
                        {/* Legal links */}
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
                            {/* ... (other links) */}
                        </Stack>
                        
                        {/* Social media links */}
                        <Stack align={'flex-start'}>
                            <Box as="a" href={'#'}>
                                Facebook
                            </Box>
                            <Box as="a" href={'#'}>
                                Twitter
                            </Box>
                            {/* ... (other links) */}
                        </Stack>
                    </SimpleGrid>
                </Container>
            </Box>
            
            {/* Social media icons */}
            <Social />
        </>
    )
}
