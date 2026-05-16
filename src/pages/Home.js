import React from 'react'
import { Box, Button, Flex, Heading, HStack, Icon, Image, Link, Stack, Text } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { Link as ReachLink } from 'react-router-dom';
import image from '../static/images/me.jpg'

const Home = () => {
    return (
        <Flex as="main" minH={{ base: 'auto', lg: 'calc(100vh - 65px)' }} align="center" px={{ base: 4, sm: 5, md: 8 }} py={{ base: 8, md: 16 }}>
            <Flex
                maxW="1100px"
                mx="auto"
                w="100%"
                align="center"
                justify="space-between"
                flexDir={{ base: 'column-reverse', lg: 'row' }}
                gap={{ base: 8, md: 10, lg: 16 }}
            >
                <Stack spacing={{ base: 5, md: 6 }} maxW="650px" textAlign={{ base: 'center', lg: 'left' }} w="100%">
                    <Text color="teal.600" fontWeight="700" fontSize={{ base: 'sm', md: 'md' }}>Frontend developer in Stockholm</Text>
                    <Heading as="h1" fontSize={{ base: '2xl', sm: '3xl', md: '5xl', lg: '6xl' }} lineHeight={{ base: '1.15', md: '1.05' }}>
                        I build practical, polished web experiences.
                    </Heading>
                    <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8">
                        Hi, I am Leandro Da Souza. I work across JavaScript, CSS, PHP and modern frontend tooling, with a focus on clear interfaces, maintainable code and steady collaboration.
                    </Text>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" justify={{ base: 'center', lg: 'flex-start' }} align="center">
                        <Button as={ReachLink} to="/contact" rightIcon={<FaArrowRight />} colorScheme="teal" size={{ base: 'md', md: 'lg' }} w={{ base: '100%', sm: 'auto' }}>
                            Get in Touch
                        </Button>
                        <Button as={Link} href="https://github.com/leandro-da-souza" isExternal variant="outline" size={{ base: 'md', md: 'lg' }} w={{ base: '100%', sm: 'auto' }}>
                            GitHub
                        </Button>
                    </Stack>
                    <HStack spacing="5" justify={{ base: 'center', lg: 'flex-start' }}>
                        <Link href="https://github.com/leandro-da-souza" isExternal aria-label="GitHub profile">
                            <Icon as={FaGithub} boxSize="7" />
                        </Link>
                        <Link href="https://linkedin.com/in/leandro-da-souza" isExternal aria-label="LinkedIn profile">
                            <Icon as={FaLinkedin} boxSize="7" />
                        </Link>
                    </HStack>
                </Stack>
                <Box
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="8px"
                    p={{ base: 3, md: 4 }}
                    boxShadow="2xl"
                    maxW={{ base: '260px', sm: '310px', md: '390px' }}
                    w="100%"
                >
                    <Box position="relative" w="100%" pb="100%" overflow="hidden" borderRadius="6px">
                        <Image
                            src={image}
                            alt="Leandro Da Souza"
                            objectFit="cover"
                            position="absolute"
                            inset="0"
                            w="100%"
                            h="100%"
                            loading="eager"
                        />
                    </Box>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Home
