import React from 'react'
import { Flex, Text, Heading, Center } from '@chakra-ui/layout'
import { FaHtml5, FaCss3 } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

const About = () => {
    return (
        <Flex w="100vw" flexDirection="column" height="80vh" align="center" justify="space-evenly">
            <Flex w="100%">
                <Heading flex="1">A little bit about <Text as="span" color="white">me.</Text></Heading>
                <Text flex="2">29 year old man born in Stockholm, Sweden. Started with web development as a hobby in 2016 and began a formal education with workplace experience from 2018 - 2021. What I lack in years of experience I make up with a burning passion for code and development of any kind. Check out my <Text as="span" color="white">Porfolio</Text> for an excerpt of the work i've done or <Text as="span" color="white">Contact</Text> if you want to get in touch!</Text>
            </Flex>
            <Center>
                <SiJavascript size={25}/>
                    <FaHtml5 size={25}/>
                    <FaCss3 size={25}/>
            </Center>
        </Flex>
    )
}

export default About
