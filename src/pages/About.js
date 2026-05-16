import React from 'react'
import { Box, Flex, SimpleGrid, Stack, Text, Heading, Link } from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom';
import { FaHtml5, FaCss3 } from 'react-icons/fa'
import { SiJavascript, SiPhp, SiReact, SiVueDotJs } from 'react-icons/si'
import { Icon } from "@chakra-ui/react"

const About = () => {
    const strengths = [
        'Frontend interfaces that stay usable under real content',
        'Styling systems built with CSS, Sass and component libraries',
        'API-driven projects and full-stack collaboration with PHP',
        'Calm delivery in agile teams, from idea to shipped feature',
    ]

    return (
        <Flex as="main" minH={{ base: 'auto', lg: 'calc(100vh - 65px)' }} px={{ base: 4, sm: 5, md: 8 }} py={{ base: 8, md: 16 }}>
            <Stack maxW="1100px" mx="auto" spacing={{ base: 8, lg: 14 }}>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, lg: 14 }} alignItems="start">
                    <Box>
                        <Text color="teal.600" fontWeight="700" mb="3">About</Text>
                        <Heading as="h1" fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }} lineHeight="1.1">
                            A developer who likes clean interfaces and clear code.
                        </Heading>
                    </Box>
                    <Stack spacing="5" color="gray.600" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8">
                        <Text>
                            I am a Stockholm-born frontend developer who started building for the web as a hobby in 2016, then turned it into a professional path through formal education and workplace experience from 2018 to 2021.
                        </Text>
                        <Text>
                            Since 2021 I have worked at Blueberry Innovations with PHP, JavaScript, CSS and agile teams. I enjoy learning, simplifying rough edges and turning ideas into interfaces people can actually use.
                        </Text>
                        <Text>
                            Right now I am keeping this site intentionally lightweight. Head to <Link as={ReachLink} to="/contact" color="teal.600">contact</Link> if you want to talk.
                        </Text>
                    </Stack>
                </SimpleGrid>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="4">
                    {strengths.map(strength => (
                        <Box key={strength} bg="white" border="1px solid" borderColor="gray.200" borderRadius="8px" p="5">
                            <Text>{strength}</Text>
                        </Box>
                    ))}
                </SimpleGrid>
                <Flex gap={{ base: 5, md: 8 }} justify="center" color="teal.600" flexWrap="wrap">
                    <Icon as={SiJavascript} boxSize={{base: 9, lg: 12 }}/>
                    <Icon as={SiReact} boxSize={{base: 9, lg: 12 }}/>
                    <Icon as={SiVueDotJs} boxSize={{base: 9, lg: 12 }}/>
                    <Icon as={FaHtml5} boxSize={{base: 9, lg: 12 }}/>
                    <Icon as={FaCss3} boxSize={{base: 9, lg: 12 }}/>
                    <Icon as={SiPhp} boxSize={{base: 9, lg: 12 }} />
                </Flex>
            </Stack>
        </Flex>
    )
}

export default About
