import { Box, Flex, Link, HStack } from '@chakra-ui/react';
import React from 'react'
import { Link as ReachLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Header = () => {
    const location = useLocation()
    const activeColor = 'teal.600'

    const links = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
    ]

    return (
        <Box
            as="header"
            position="sticky"
            top="0"
            zIndex="10"
            bg="rgba(247,250,252,0.9)"
            borderBottom="1px solid"
            borderColor="gray.200"
            backdropFilter="blur(14px)"
        >
            <Flex
                maxW="1100px"
                mx="auto"
                px={{ base: 4, sm: 5, md: 8 }}
                py="3"
                align="center"
                justify="space-between"
                gap="3"
                flexWrap="wrap"
            >
                <Link
                    as={ReachLink}
                    to="/"
                    fontWeight="700"
                    letterSpacing="0"
                    _hover={{ textDecoration: 'none', color: activeColor }}
                >
                    Leandro
                </Link>
                <HStack spacing={{ base: 3, sm: 4, md: 6 }} fontSize={{ base: 'sm', md: 'md' }}>
                    {links.map(link => (
                        <Link
                            key={link.path}
                            as={ReachLink}
                            to={link.path}
                            color={location.pathname === link.path ? activeColor : 'inherit'}
                            fontWeight={location.pathname === link.path ? '700' : '500'}
                            _hover={{ color: activeColor, textDecoration: 'none' }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </HStack>
            </Flex>
        </Box>
    )
}

export default Header
