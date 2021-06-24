import React from 'react'
import { Flex, Text, Heading } from '@chakra-ui/layout'
import { Image } from "@chakra-ui/react"
import { Box } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import image from '../static/images/me.jpg'

const Home = () => {
    const handleClick = e => {
        if(e.target.tagName === 'path') {
            window.open(e.nativeEvent.target.parentElement.dataset.url, '_target')
        } else {
            window.open(e.target.dataset.url, '_target')
        }
    }

    return (
        <Flex width="100vw" height="90vh" justify="space-evenly" align="center" flexDir="column">
            <Box>
                <Image boxSize={['230', '340', '390']} src={image} alt="Leandro Da Souza" objectFit="cover" borderRadius="full"/>
            </Box>
            <Box textAlign="center">
                <Heading p="1" fontSize={{base: 'lg', md: 'lg', lg: '2xl'}}>Hi! i'm <Text as="span" color="white">Leandro Da Souza</Text> and I am a Frontend Developer!</Heading>
                <Text>Currently Looking for Work.</Text>
            </Box>
            <Flex w="30vw" justify="space-between" >
                <FaGithub data-url="https://github.com/leandro-da-souza" size={40} onClick={handleClick}/>
                <FaLinkedin data-url="https://linkedin.com/in/leandro-da-souza"size={40} onClick={handleClick}/>
            </Flex>
        </Flex>
    )
}

export default Home
