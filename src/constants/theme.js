import { extendTheme } from "@chakra-ui/react";


const styles = {
    global: {
      "html, body, #root": {
        minHeight: "100%",
      },
      body: {
        color: 'gray.800',
        bg: 'gray.50',
        overflowX: "hidden",
      },
      "::selection": {
        backgroundColor: 'teal.100',
        color: 'gray.900',
      },
    },
  };

const theme = extendTheme({
    fonts: {
        body: 'JetBrains Mono, monospace',
        heading: 'JetBrains Mono, monospace'
    },
    colors: {
        custom: {
            blue: '#004151',
            ink: '#0D1117',
            paper: '#F7FAFC'
        }
    },
    styles,
})



export default theme
