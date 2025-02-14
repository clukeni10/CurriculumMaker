import {Box, Text} from '@chakra-ui/react'
import { MdDashboardCustomize } from "react-icons/md";
import { AiOutlineFilePdf } from "react-icons/ai";
import { AiOutlineFileWord } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";

function FuncionalidadesPrincipais(){
    return (
        <Box height="200px" bg="black" color="#43637A" display="flex" alignItems="center" justifyContent="space-around" gap="5">
           
                <Box display="flex" flexDirection="column" alignItems="center" gap="3" width="400px">
                    <MdDashboardCustomize size={100} />
                    <Text textStyle="sm" textAlign="center" fontWeight="bold">Escolha entre diversos modelos profissionais e personalize com suas informações para criar um currículo único e atrativo.</Text>
                </Box>

                <Box display="flex" flexDirection="column" alignItems="center" gap="3" width="400px">
                    <Box display="flex">
                    <AiOutlineFilePdf size={100}/>
                    <AiOutlineFileWord size={100}/>
                    </Box>
                    
                    <Text textStyle="sm" textAlign="center" fontWeight="bold">Salve seu currículo em formatos populares (PDF ou Word), facilitando o compartilhamento e envio para oportunidades de emprego.</Text>

                </Box>

                <Box display="flex" flexDirection="column" alignItems="center" gap="3" width="400px">
                    <FaRobot  size={100}/>
                    <Text textStyle="sm" textAlign="center" fontWeight="bold">Receba sugestões automáticas para seções como objetivos e experiências, otimizando seu currículo com a ajuda da inteligência artificial.</Text>

                </Box>

                <Box display="flex" flexDirection="column" alignItems="center" gap="3" width="400px">
                    <RiLightbulbFlashLine  size={100}/>
                    <Text textStyle="sm" textAlign="center" fontWeight="bold">Inspire-se com frases prontas para descrever suas experiências de forma clara, impactante e adequada ao mercado de trabalho.</Text>

                </Box>


        </Box>
    )
}

export default FuncionalidadesPrincipais;