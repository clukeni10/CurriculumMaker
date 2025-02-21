import { Box, Text, Heading, Grid, GridItem, Icon } from "@chakra-ui/react";
import { MdDashboardCustomize } from "react-icons/md";
import { AiOutlineFilePdf, AiOutlineFileWord } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";

const features = [
  {
    title: "Modelos prontos e personalizáveis",
    icon: MdDashboardCustomize,
    description:
      "Escolha entre diversos modelos profissionais e personalize com suas informações para criar um currículo único e atrativo.",
  },
  {
    title: "Exportação em PDF e Word",
    icon: [AiOutlineFilePdf, AiOutlineFileWord],
    description:
      "Salve seu currículo em formatos populares (PDF ou Word), facilitando o compartilhamento e envio para oportunidades de emprego.",
  },
  {
    title: "Assistente inteligente (IA)",
    icon: FaRobot,
    description:
      "Receba sugestões automáticas para seções como objetivos e experiências, otimizando seu currículo com a ajuda da inteligência artificial.",
  },
  {
    title: "Sugestões de frases para experiências",
    icon: RiLightbulbFlashLine,
    description:
      "Inspire-se com frases prontas para descrever suas experiências de forma clara, impactante e adequada ao mercado de trabalho.",
  },
];

export default function FuncionalidadesPrincipais() {
  return (
    <Box bg="white" color="#43637A" py={12} px={8}>
      <Heading textAlign="center" mb={10} fontSize="3xl" fontWeight="bold">
        Funcionalidades Principais
      </Heading>

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={10}
        justifyContent="center"
      >
        {features.map((feature, index) => (
          <GridItem
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            p={6}
            bg="gray.100"
            borderRadius="lg"
            boxShadow="lg"
            transition="all 0.3s"
            _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
          >
            {Array.isArray(feature.icon) ? (
              <Box display="flex" gap={4}>
                {feature.icon.map((IconComp, i) => (
                  <Icon as={IconComp} key={i} boxSize={16} color="#43637A" />
                ))}
              </Box>
            ) : (
              <Icon as={feature.icon} boxSize={16} color="#43637A" />
            )}

            <Heading fontSize="xl" fontWeight="bold" mt={4}>
              {feature.title}
            </Heading>

            <Text fontSize="md" mt={3} color="gray.600">
              {feature.description}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
