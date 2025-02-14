import { Box, Flex, Image } from "@chakra-ui/react";
import { LuHouse } from "react-icons/lu";
import { LuLogIn } from "react-icons/lu";
import { LuCog } from "react-icons/lu";


function Header(){
    
    return (
       <Box
            bg="black"
            color="white"
        
       >
            <Flex
                justifyContent="space-between"
                alignItems="center"
                
            >
                <Image 
                height="100px"  
                src="../img/logoNoB.png"
                marginLeft="10"
                >
                

                </Image>

            <Box
                fontSize="3xl"
                display="flex"
                width="100"
                gap="2"
                marginRight="10"
                
                
            >
                <Box
                    as={LuHouse}
                    boxSize={8} 
                    color="#5A7D9A" 
                    transition="color 0.3s"
                    _hover={{ color: "white" }}
                    cursor="pointer"
                ></Box>
                <Box
                     as={LuCog}
                     boxSize={8} 
                     color="#5A7D9A" 
                     transition="color 0.3s"
                     _hover={{ color: "white" }}
                     cursor="pointer"

                ></Box>
                <Box
                     as={LuLogIn}
                     boxSize={8} 
                     color="#5A7D9A" 
                     transition="color 0.3s"
                     _hover={{ color: "white" }}
                     cursor="pointer"

                ></Box>
           
               
                
            </Box>


            </Flex>
       </Box> 
    )
}

export default Header;