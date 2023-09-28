import { Box, Image } from '@chakra-ui/react'
import React from 'react'

// IssuesPlan component for rendering the issues plan section
const IssuesPlan = () => {
    return (
        <Box
            w={'full'}
            h={'115vh'}
            bgColor='#0c1015'
        >
            <Image w='85%' m='auto' src='https://github.githubassets.com/images/modules/site/issues/illo/issues-plan.png?width=1500&format=webpll' />
        </Box>
    )
}

export default IssuesPlan
