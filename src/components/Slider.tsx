import { Box, Icon, Image, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { slides } from "./objects/slides";


export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Box position="relative" maxW="100%" height="80vh" overflow="hidden">
      
      <Image src={slides[currentIndex].image} alt={`Slide ${currentIndex}`} w="full" h="full" objectFit="cover" />

      {/* Texto e botão posicionados mais abaixo */}
      <Box
        position="absolute"
        top="70%" // Movido mais para baixo
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        color="white"
        bg="rgba(0, 0, 0, 0.6)"
        p={5}
        borderRadius="md"
        w="80%"
      >
        <Text fontSize="2xl" fontWeight="bold">{slides[currentIndex].text}</Text>
        <Button
          mt={4}
          bg="#43637A"
          color="white"
          _hover={{bg: "#385065  "}}
          onClick={() => (window.location.href = slides[currentIndex].buttonLink)}
        >
          {slides[currentIndex].buttonText}
        </Button>
      </Box>

      {/* Botão para voltar */}
      <Icon
        as={LuArrowLeft}
        onClick={prevSlide}
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        bg="rgba(0, 0, 0, 0.5)"
        color="white"
        fontSize="3xl"
        p={2}
        borderRadius="full"
        cursor="pointer"
        _hover={{ bg: "rgba(0, 0, 0, 0.7)" }}
      />

      {/* Botão para avançar */}
      <Icon
        as={LuArrowRight}
        onClick={nextSlide}
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        bg="rgba(0, 0, 0, 0.5)"
        color="white"
        fontSize="3xl"
        p={2}
        borderRadius="full"
        cursor="pointer"
        _hover={{ bg: "rgba(0, 0, 0, 0.7)" }}
      />
    </Box>
  );
}
