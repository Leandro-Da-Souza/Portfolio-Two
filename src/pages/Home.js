import React from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import { Image } from "@chakra-ui/react"
import { Box } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import image from '../static/images/me.jpg'

const Home = () => {
    const handleClick = e => {
        if(e.target.tagName === 'path') {
            // console.log(e.nativeEvent.target.parentElement.dataset.url)
            window.open(e.nativeEvent.target.parentElement.dataset.url, '_target')
        } else {
            // console.log(e.target.dataset.url)
            window.open(e.target.dataset.url, '_target')
        }
    }

    return (
        <Flex width="100vw" height="75vh" justify="space-evenly" align="center" flexDir="column">
            <Box>
                <Image boxSize="150px" src={image} alt="Leandro Da Souza" objectFit="cover" borderRadius="full"/>
            </Box>
            <Box textAlign="center">
                <Text id="homeTxt">Hi! i'm Leandro Da Souza and I am a Frontend Developer</Text>
                <Text>Currently Looking for Work</Text>
            </Box>
            <Flex w="30vw" justify="space-between" >
                <FaGithub data-url="https://github.com/leandro-da-souza" size={40} onClick={handleClick}/>
                <FaLinkedin data-url="https://linkedin.com/in/leandro-da-souza"size={40} onClick={handleClick}/>
            </Flex>
        </Flex>
    )
}

export default Home
