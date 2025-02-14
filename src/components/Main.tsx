import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";



function Main(){
    return (
        <Flex height="600px" width="100%" bg="gray.100">
            <Box flex="2" position="relative">
                <Image 
                    src="../img/main-img.webp" 
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
        </Box>
      </Flex>
    )
}

export default Main;