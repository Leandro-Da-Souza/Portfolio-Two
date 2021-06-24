import React from 'react'
import { Flex, Text, Heading, Box, Center,  } from '@chakra-ui/layout'
import { FaHtml5, FaCss3 } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

const About = () => {
    return (
        <Flex w="100vw" flexDirection="column" height="100%">
            <Flex>
            <Heading>A little bit about <Text as="span" color="white">me.</Text></Heading>
            <Text>29 year old man born in Stockholm, Sweden. Started with web development as a hobby in 2016 and began a formal education with workplace experience from 2018 - 2021. What i lack in years of experience i make up with a burning passion for code and development of any kind. Check out my Porfolio for an excerpt of the work i've done or Contact if you want to get in touch!</Text>
            </Flex>
            <Center>
                <SiJavascript/>
                    <FaHtml5 />
                    <FaCss3 />
            </Center>
        </Flex>
    )
}

export default About
