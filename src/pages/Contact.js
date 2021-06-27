import React from 'react'
import { Flex, HStack } from '@chakra-ui/react';
import { Heading, Link } from '@chakra-ui/layout';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';

const Contact = () => {
    const handleClick = e => {
        if(e.target.tagName === 'path') {
            window.open(e.nativeEvent.target.parentElement.dataset.url, '_target')
        } else {
            window.open(e.target.dataset.url, '_target')
        }
    }

    return (
        <Flex w="100vw" height="70vh" justify="center" align="center" flexDir="column">
            <Heading fontSize="1.2rem" marginBottom="3%" padding={{base: '5%'}}>I'm available at <Link color="white" href="mailto:dasouza.leandro@gmail.com">dasouza.leandro@gmail.com</Link> any day of the week, or visit any of the links below for my socials!</Heading>
            <HStack>
                <Icon as={FaGithub} color="white" data-url="https://github.com/leandro-da-souza" boxSize={{base: 39, lg: 50}} onClick={handleClick} cursor="pointer"/>
                <Icon as={FaLinkedin} color="white" data-url="https://linkedin.com/in/leandro-da-souza" boxSize={{base: 37, lg: 50}} onClick={handleClick} cursor="pointer"/>
            </HStack>
        </Flex>
    )
}

export default Contact
