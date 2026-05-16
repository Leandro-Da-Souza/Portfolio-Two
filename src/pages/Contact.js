import React from 'react'
import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { Heading, Link } from '@chakra-ui/layout';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <Flex as="main" minH={{ base: 'auto', md: 'calc(100vh - 65px)' }} justify="center" align="center" px={{ base: 4, sm: 5, md: 8 }} py={{ base: 10, md: 16 }}>
            <Stack maxW="780px" spacing="7" textAlign="center" align="center">
                <Text color="teal.600" fontWeight="700">Contact</Text>
                <Heading as="h1" fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }} lineHeight="1.1">
                    Have a project, role or idea worth talking through?
                </Heading>
                <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8">
                    I am reachable at <Link color="teal.600" href="mailto:dasouza.leandro@gmail.com" wordBreak="break-word">dasouza.leandro@gmail.com</Link>. You can also find me on GitHub and LinkedIn.
                </Text>
                <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" justify="center" w="100%">
                    <Button as={Link} href="mailto:dasouza.leandro@gmail.com" colorScheme="teal" size={{ base: 'md', md: 'lg' }} w={{ base: '100%', sm: 'auto' }}>
                        Email Me
                    </Button>
                    <Button as={Link} href="https://github.com/leandro-da-souza" isExternal leftIcon={<FaGithub />} variant="outline" size={{ base: 'md', md: 'lg' }} w={{ base: '100%', sm: 'auto' }}>
                        GitHub
                    </Button>
                    <Button as={Link} href="https://linkedin.com/in/leandro-da-souza" isExternal leftIcon={<FaLinkedin />} variant="outline" size={{ base: 'md', md: 'lg' }} w={{ base: '100%', sm: 'auto' }}>
                        LinkedIn
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    )
}

export default Contact
