import { Box, Flex, Image, Text, Heading, Button } from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";




function Main(){
    return (
        <Flex height="600px" width="100%" bg="gray.100">
            <Box flex="2" position="relative">
                <Image 
                    src="../img/curriculum.webp" 
                    alt="Imagem Exemplo" 
                    objectFit="cover" 
                    height="100%" 
                    width="100%" 
                />
            </Box>
  
        <Box flex="1" flexDirection="column" bg="white" color="#43637A" p={6} display="flex" alignItems="center" justifyContent="center" gap="5">
            <Heading size="3xl" fontWeight="extrabold" textAlign="center">
                "Transforme sua experiência em oportunidades — Crie seu currículo profissional em minutos!" 
            </Heading>
          <Text fontSize="md" fontWeight="bold" color="#777777 " textAlign="center">
                Destacamos seu potencial com currículos prontos para impressionar. Fácil, rápido e sob medida para suas conquistas profissionais.
          </Text>
          <Button size="md" variant="subtle" bg="#43637A" color="white">Criar Currículo <LuArrowRight />
          </Button>
        </Box>
      </Flex>
    )
}

export default Main;