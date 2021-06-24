import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";


const styles = {
    global: props => ({
      body: {
        color: mode('red.500', 'blue.100')(props),
        bg: mode('blue.100', 'red.500')(props),
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
            blue: '#004151'
        }
    },
    styles,
})



export default theme