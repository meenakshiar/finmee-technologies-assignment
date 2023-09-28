import {
    // Import Chakra UI components
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    InputGroup,
    InputLeftElement,
    Input,
    InputRightElement,
} from '@chakra-ui/react';
import {
    // Import Chakra UI icons
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    SearchIcon,
} from '@chakra-ui/icons';
import { BsGithub, BsSlashSquare } from 'react-icons/bs';

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box
            bg='transparent'
            backgroundImage={
                'url(https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
        >
            <Flex
                bg='transparent'
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderStyle={'solid'}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={'white'}
                        fontSize={'35px'}
                    >
                        <BsGithub />
                    </Text>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    direction={'row'}
                    spacing={10}
                >
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='gray.300' />
                        </InputLeftElement>
                        <Input p='1 6' type='tel' bg='transparent' placeholder='Phone number' />
                        <InputRightElement>
                            <BsSlashSquare color='white' />
                        </InputRightElement>
                    </InputGroup>
                    <Button color={'white'} fontSize={'sm'} fontWeight={400} variant={'ghost'} href={'#'} _hover={{}}>
                        Sign In
                    </Button>
                    <Button
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        variant={'outline'}
                        bg={'none'}
                        href={'#'}
                        px='6'
                        py='5'
                        _hover={{
                            bg: 'grey.300',
                        }}>
                        Sign Up
                    </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    )
}

const DesktopNav = () => {
    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Box
                                as="a"
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'16px'}
                                fontWeight={500}
                                color={'white'}
                            >
                                {navItem.label}
                            </Box>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={'white'}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    )
}

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Box
            as="a"
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
        >
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'blue.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
            </Stack>
        </Box>
    )
}

const MobileNav = () => {
    return (
        <Stack bg='white' p={4} display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    )
}

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Box
                py={2}
                as="a"
                href={href ?? '#'}
                justifyContent="space-between"
                alignItems="center"
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Box>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Box as="a" key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Box>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    )
}

const NAV_ITEMS = [
    {
        label: 'Product',
        children: [
            {
                label: 'Actions',
                subLabel: 'Automate any work flow',
                href: '#',
            },
            {
                label: 'Packages',
                subLabel: 'Host and manage packages',
                href: '#',
            },
        ],
    },
    {
        label: 'Solutions',
        children: [
            {
                label: 'Job Board',
                subLabel: 'Find your dream design job',
                href: '#',
            },
            {
                label: 'Freelance Projects',
                subLabel: 'An exclusive list for contract work',
                href: '#',
            },
        ],
    },
    {
        label: 'Open Source',
        href: '#',
    },
    {
        label: 'Pricing',
        href: '#',
    },
]
