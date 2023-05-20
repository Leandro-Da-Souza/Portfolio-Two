import { Grid, GridItem, Link, HStack, useColorMode, theme } from '@chakra-ui/react';
import React from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher.js';
import { Link as ReachLink } from 'react-router-dom';


const Header = () => {
    const { colorMode } = useColorMode()
    
    const getBorderBottomColor = () => {
        if(colorMode === 'light') {
            return theme.colors.red[200];
        } else {
            return '#33FF33';
        }
    }

    return (
        <Grid w="100vw" h="10vh" gridRow="repeat(2, 1fr)">
                <HStack 
                    fontFamily="heading" 
                    justify="space-evenly" 
                    w="100vw"
                    spacing="4"
                    p="2"
                    paddingTop={4}
                    fontSize="1.1rem"
                    borderBottom={`1px solid ${getBorderBottomColor()}`}
                >
                    <Link as={ReachLink} to="/">Home</Link>
                    <Link as={ReachLink} to="/about">About</Link>
                    <Link as={ReachLink} to="/portfolio">Portfolio</Link>
                    <Link as={ReachLink} to="/contact">Contact</Link>
                </HStack>
                <GridItem justifySelf="center" marginTop={2} marginBottom={2}>
                    <ColorModeSwitcher />
                </GridItem>
        </Grid>
    )
}

export default Header
