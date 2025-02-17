import { Box, Flex, Image } from "@chakra-ui/react";
import { LuAccessibility, LuCog, LuFileText, LuHouse } from "react-icons/lu";
import { useNavigate } from "react-router-dom";


function Header(){
    const navigate = useNavigate();

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
                    onClick={() => navigate("/")}
                ></Box>
                <Box
                     as={LuFileText}
                     boxSize={8} 
                     color="#5A7D9A" 
                     transition="color 0.3s"
                     _hover={{ color: "white" }}
                     cursor="pointer"
                     onClick={() => navigate("/settings")}

                ></Box>
                <Box
                     as={LuCog}
                     boxSize={8} 
                     color="#5A7D9A" 
                     transition="color 0.3s"
                     _hover={{ color: "white" }}
                     cursor="pointer"
                     onClick={() => navigate("/login")}

                ></Box>
                <Box
                     as={LuAccessibility}
                     boxSize={8} 
                     color="#5A7D9A" 
                     transition="color 0.3s"
                     _hover={{ color: "white" }}
                     cursor="pointer"
                     onClick={() => navigate("/Slider")}

                ></Box>
           
               
                
            </Box>


            </Flex>
       </Box> 
    )
}

export default Header;