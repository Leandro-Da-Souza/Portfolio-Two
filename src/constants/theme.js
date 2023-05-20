import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";


const styles = {
    global: props => ({
      body: {
        color: mode('red.500', 'custom.hackerGreen')(props),
        bg: mode('custom.blue', 'black')(props),
      },
    }),
  };

const theme = extendTheme({
    fonts: {
        body: 'Montserrat',
        heading: 'Limelight'
    },
    colors: {
        custom: {
            blue: '#004151',
            hackerGreen: '#33FF33'
        }
    },
    styles,
})



export default theme