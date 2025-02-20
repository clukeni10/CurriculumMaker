import { Box, Button } from "@chakra-ui/react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";


export default function Slider() {
  return (
    <Box
      width="100%"
      min-height="100vh"
      bg="rgb(240, 240, 240)"
    >
        <Box
          width="100%"
          height="90vh"
          display="flex"
          flex-direction="column"
          gap="16px"
        >
            <Box
              width="100%"
              height="100%"
            >
              <Box
                color="black"
                font-size="86px"
              >1</Box>
              <Box
                 color="black"
                 font-size="86px"
              >2</Box>
              <Box
                 color="black"
                 font-size="86px"  
              >3</Box>

            

            </Box>
            <Box>
              <Button><LuArrowLeft /></Button>
              <Button><LuArrowRight /></Button>

            </Box>
        </Box>
    </Box>
  )
}
