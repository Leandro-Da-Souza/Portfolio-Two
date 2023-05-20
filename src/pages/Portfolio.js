import React from 'react'
import { Flex, Box, Heading, Link, List, ListItem, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react';
import Img1 from '../static/images/portfolio/one.png'
import Img5 from '../static/images/portfolio/five.png'

const Portfolio = () => {
    return (
        <Flex minHeight="100%" flexDir="column" marginTop={{base: '10%', md: '5%', lg: '5%'}}>
            <Heading textAlign="center" fontSize={{base: '1.1rem', md: '1.5rem', lg: '2rem'}} marginBottom={{base: '5%', lg: '5%'}}>A selection from my <Link color="white" href="https://github.com/leandro-da-souza" target="_blank" >Github</Link> page, for more please visit the link!</Heading>
            <Flex flexDir="column" w="100%" minHeight="100vh" width="100vw" justify="space-evenly" m>
                <Flex 
                    w="100vw" 
                    justify={{base: 'center', md: 'center',lg:"space-evenly"}} 
                    align={{base: 'center', md: 'flex-start', lg: 'flex-start'}} flexDirection={{base: 'column', md: 'row', lg: 'row'}}
                    marginBottom={{base: '5%'}}
                >
                    <Image src={Img1} w={{base: '75%', md: '25%', lg:"25%"}} loading="lazy"></Image>
                    <Box alignSelf={{base: 'center', lg:"center"}} w={{ base: '100%',lg:"50%"}}>
                        <List paddingLeft={{base: '2%'}} paddingTop={{base: '2%'}} spacing="0.3">
                            <ListItem><Text color="white" as="span" fontSize="1.1rem">Name:</Text> Plantera Mera</ListItem>
                            <ListItem><Text color="white" as="span" fontSize="1.1rem">Desc:</Text> A website/reference page for a fictious company me and a classmate made for our finals project.</ListItem>
                            <ListItem><Text color="white" as="span" fontSize="1.1rem">Stack:</Text>  Vue, Sass, Firebase</ListItem>
                            <ListItem><Text color="white" as="span" fontSize="1.1rem">Link:</Text>  <Link color="white" href="https://planteramera.netlify.app/" target="_blank">https://planteramera.netlify.app/</Link></ListItem>
                        </List>
                    </Box>
                </Flex>
                <Flex 
                    w="100vw" 
                    justify={{base: 'center', md: 'center',lg:"space-evenly"}} 
                    align={{base: 'center', md: 'flex-start', lg: 'flex-start'}} flexDirection={{base: 'column', md: 'row', lg: 'row'}}
                    marginBottom={{base: '5%'}}
                >
                    <Image src={Img5} loading="lazy" w={{base: '75%', md: '25%', lg:"25%"}}></Image>
                    <Box alignSelf="center" w={{ base: '100%',lg:"50%"}}>
                        <List paddingLeft={{base: '2%'}} paddingTop={{base: '2%'}} spacing="0.3">
                            <ListItem><Text color="white" as="span" fontSize="1.1rem">Name:</Text> Flickr API Search</ListItem>
                            <ListItem><Text color="white" as="span" fontSize="1.1rem">Desc:</Text> A photo gallery project, school assignment to practice API calls.</ListItem>
                            <ListItem><Text color="white" as="span" fontSize="1.1rem">Stack:</Text> Vanilla JS, CSS</ListItem>
                            <ListItem><Text color="white" as="span" fontSize="1.1rem">Link: </Text><Link color="white" href="https://leoflickr.netlify.app/" target="_blank">https://leoflickr.netlify.app/</Link></ListItem>
                        </List>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Portfolio