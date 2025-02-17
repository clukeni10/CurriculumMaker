import { Box } from "@chakra-ui/react"
import './App.css'
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Settings from "./components/settings"
import Login from "./components/login"
import  Slider  from "./components/Slider";

function App() {
 

  return (
    <Box
      
    >
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/slider" element={<Slider/>} />
      </Routes>
      </Router>
      
    </Box>
  )
}

export default App
