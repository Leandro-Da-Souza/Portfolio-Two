import { Grid, Center, Link, HStack } from '@chakra-ui/react';
import React from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher.js';
import { Link as ReachLink } from 'react-router-dom';

const Header = () => {
    return (
        <Grid w="100vw" h="5vh" gridRow="repeat(2, 1fr)">
                <HStack 
                    fontFamily="heading" 
                    justify="center" 
                    w="100vw"
                    spacing="4"
                >
                    <Link as={ReachLink} to="/">Home</Link>
                    <Link as={ReachLink} to="/about">About</Link>
                    <Link as={ReachLink} to="/portfolio">Portfolio</Link>
                    <Link as={ReachLink} to="/contact">Contact</Link>
                </HStack>
                
            <ColorModeSwitcher />
        </Grid>
    )
}

export default Header
