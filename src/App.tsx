import { Box } from "@chakra-ui/react"
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home"
import Modelos from "./components/Modelos"
import Login from "./components/login"


function App() {
 

  return (
    <Box
      
    >
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Modelos" element={<Modelos />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </Router>
      
    </Box>
  )
}

export default App
