'use client'

import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Image
} from '@chakra-ui/react'

// SocialButton component for rendering social media buttons
const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

// Social component for rendering the footer section with social media buttons
export default function Social() {
    return (
        <Box
            bg='#161b22'
            color='#6e7681'
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={8}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text fontSize='12px'>
                    © 2023 GitHub, Inc. Terms Privacy (Updated 08/2022) Sitemap What is Git?
                </Text>
                <Stack direction={'row'} spacing={1}>
                    {/* Render social media buttons */}
                    <SocialButton label={'Twitter'} href={'#'}>
                        <Image w='50%' src='https://github.githubassets.com/images/modules/site/icons/footer/x.svg' />
                    </SocialButton>
                    <SocialButton label={'YouTube'} href={'#'}>
                        <Image w='65%' src='https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg' />
                    </SocialButton>
                    {/* (other social media buttons) */}
                    <SocialButton label={'GitHub'} href={'#'}>
                        <Image src='https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg' />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    )
}
