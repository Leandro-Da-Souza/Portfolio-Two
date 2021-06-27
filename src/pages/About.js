import React from 'react'
import { Flex, Text, Heading, HStack } from '@chakra-ui/layout'
import { FaHtml5, FaCss3 } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { Icon } from "@chakra-ui/react"

const About = () => {
    return (
        <Flex w="100vw" flexDirection="column" height="80vh" align="center" justify="space-evenly" paddingLeft="3%" paddingRight="3%"> 
            <Flex w={{base: "100%", md: '100%', lg: '90%'}} flexDirection={{ base: 'row', md: 'row', lg: 'column'}}>
                <Heading flex="1">A little bit about <Text as="span" color="white">me.</Text></Heading>
                <Text flex="2">29 year old man born in Stockholm, Sweden. Started with web development as a hobby in 2016 and began a formal education with workplace experience from 2018 - 2021. What I lack in years of experience I make up with a burning passion for code and development of any kind. Check out my <Text as="span" color="white">Porfolio</Text> for an excerpt of the work i've done or <Text as="span" color="white">Contact</Text> if you want to get in touch!</Text>
            </Flex>
            <HStack>
                <Icon as={SiJavascript} boxSize={{base: 35, lg: 50 }}/>
                <Icon as={FaHtml5} boxSize={{base: 35, lg: 50 }}/>
                <Icon as={FaCss3} boxSize={{base: 35, lg: 50 }}/>
            </HStack>
        </Flex>
    )
}

export default About
