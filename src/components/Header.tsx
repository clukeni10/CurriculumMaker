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
            <LuHouse
                cursor="pointer"
            />
            <LuCog 
                cursor="pointer"
            />
            <LuLogIn 
                cursor="pointer"
            />
               
                
            </Box>


            </Flex>
       </Box> 
    )
}

export default Header;