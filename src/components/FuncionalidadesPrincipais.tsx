import {Box, Text, Heading} from '@chakra-ui/react'
import { MdDashboardCustomize } from "react-icons/md";
import { AiOutlineFilePdf } from "react-icons/ai";
import { AiOutlineFileWord } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";

function FuncionalidadesPrincipais(){
    return (
        <Box height="300px" bg="white" color="#43637A" display="flex" alignItems="center" justifyContent="space-around" gap="5">
           
                <Box display="flex" flexDirection="column" alignItems="center" gap="3" width="400px">
                    <Heading fontWeight="600" textStyle="2xl">Modelos prontos e personalizáveis</Heading>
                    <MdDashboardCustomize size={100} color="#43637A"/>
                    <Text textStyle="sm" textAlign="center" fontWeight="bold" color="#777777">Escolha entre diversos modelos profissionais e personalize com suas informações para criar um currículo único e atrativo.</Text>
                </Box>

                <Box display="flex" flexDirection="column" alignItems="center" gap="3" width="400px">
                    <Heading fontWeight="600" textStyle="2xl">Exportação em PDF e Word</Heading>
                    <Box display="flex">
                    <AiOutlineFilePdf size={100} color="#43637A"/>
                    <AiOutlineFileWord size={100} color="#43637A"/>
                    </Box>
                    
                    <Text textStyle="sm" textAlign="center" fontWeight="bold" color="#777777">Salve seu currículo em formatos populares (PDF ou Word), facilitando o compartilhamento e envio para oportunidades de emprego.</Text>

                </Box>

                <Box display="flex" flexDirection="column" alignItems="center" gap="3" width="400px">
                    <Heading fontWeight="600" textStyle="2xl">Assistente inteligente (IA)</Heading>

                    <FaRobot  size={100} color="#43637A"/>
                    <Text textStyle="sm" textAlign="center" fontWeight="bold" color="#777777">Receba sugestões automáticas para seções como objetivos e experiências, otimizando seu currículo com a ajuda da inteligência artificial.</Text>

                </Box>

                <Box display="flex" flexDirection="column" alignItems="center" gap="3" width="400px">
                <Heading fontWeight="600" textStyle="2xl">Sugestões de frases para experiências profissionais</Heading>

                    <RiLightbulbFlashLine  size={100} color="#43637A"/>
                    <Text textStyle="sm" textAlign="center" fontWeight="bold" color="#777777">Inspire-se com frases prontas para descrever suas experiências de forma clara, impactante e adequada ao mercado de trabalho.</Text>

                </Box>


        </Box>
    )
}

export default FuncionalidadesPrincipais;