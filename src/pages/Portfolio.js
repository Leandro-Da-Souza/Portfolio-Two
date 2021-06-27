import React from 'react'
import { Flex, Box, Heading, Link, List, ListItem } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react';
import Img1 from '../static/images/portfolio/one.png'
import Img4 from '../static/images/portfolio/four.png'
import Img5 from '../static/images/portfolio/five.png'

const Portfolio = () => {
    return (
        <Flex h="100%" flexDir="column" marginTop="5%">
            <Heading textAlign="center">A selection from my <Link color="white" href="https://github.com/leandro-da-souza" target="_blank" >Github</Link> page, for more please visit the link!</Heading>
            <Flex flexDir="column">
                <Flex>
                    <Image src={Img1} w="25%"></Image>
                    <Box>
                        <List>
                            <ListItem>Name: Plantera Mera</ListItem>
                            <ListItem>Desc: A website/reference page for a fictious company me and a classmate made for our finals project.</ListItem>
                            <ListItem>Stack: Vue, Sass, Firebase</ListItem>
                            <ListItem>Link: <Link color="white" href="https://planteramera.netlify.app/" target="_blank">https://planteramera.netlify.app/</Link></ListItem>
                        </List>
                    </Box>
                </Flex>
                <Flex>
                    <Image src={Img4} w="25%"></Image>
                    <Box>
                        <List>
                            <ListItem>Name: Leandro Da Souza</ListItem>
                            <ListItem>Desc: First rendition of my portfolio page, wasn't satisfied so remade it.</ListItem>
                            <ListItem>Stack: React, CSS, Styled Components</ListItem>
                            <ListItem>Link: <Link color="white" href="https://leandrodasouza.netlify.app/" target="_blank">https://leandrodasouza.netlify.app/</Link></ListItem>
                        </List>
                    </Box>
                </Flex>
                <Flex>
                    <Image src={Img5} w="25%"></Image>
                    <Box>
                        <List>
                            <ListItem>Name: Flickr API Search</ListItem>
                            <ListItem>Desc: A photo gallery project, school assignment to practice API calls.</ListItem>
                            <ListItem>Stack: Vanilla JS, CSS</ListItem>
                            <ListItem>Link: <Link color="white" href="https://leoflickr.netlify.app/" target="_blank">https://leoflickr.netlify.app/</Link></ListItem>
                        </List>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Portfolio