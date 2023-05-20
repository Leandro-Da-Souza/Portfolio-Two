import React from 'react'
import { Flex, Text, Heading, HStack, Link} from '@chakra-ui/layout'
import { Link as ReachLink } from 'react-router-dom';
import { FaHtml5, FaCss3 } from 'react-icons/fa'
import { SiJavascript, SiPhp } from 'react-icons/si'
import { Icon } from "@chakra-ui/react"

const About = () => {
    const calculateAge = (birthday) => {
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    return (
        <Flex w="100vw" flexDirection="column" height="80vh" align="center" justify="space-evenly" paddingLeft="3%" paddingRight="2%"> 
            <Flex w={{base: "100%", md: '90%', lg: '90%'}} flexDirection={{ base: 'row', md: 'row', lg: 'column'}}>
                <Heading flex="1">A little bit about <Text as="span" color="white">me.</Text></Heading>
                <Text flex="2" fontSize="15">A {calculateAge(new Date('1992-03-04'))} year old man born in Stockholm, Sweden. Started with web development as a hobby in 2016 and began a formal education with workplace experience from 2018 - 2021. Employed by Blueberry Innovations since 2021 working with technologies such as PHP, JS, CSS in Agile teams and more. I have passion for coding and learning as much as possible, and on my free time like to workout and play guitar. Check out my <Link as={ReachLink} to="/portfolio" color="white">Portfolio</Link> for an excerpt of the work i've done or <Link as={ReachLink} to="/contact" color="white">Contact</Link> if you want to get in touch!</Text>
            </Flex>
            <HStack>
                <Icon as={SiJavascript} boxSize={{base: 35, lg: 50 }}/>
                <Icon as={FaHtml5} boxSize={{base: 35, lg: 50 }}/>
                <Icon as={FaCss3} boxSize={{base: 35, lg: 50 }}/>
                <Icon as={SiPhp} boxSize={{base: 35, lg: 50 }}></Icon>
            </HStack>
        </Flex>
    )
}

export default About
