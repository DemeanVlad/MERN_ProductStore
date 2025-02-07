import { Box, useColorModeValue } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import { useProductStore } from "./store/product";


function App() {
  const {products} = useProductStore();
  return (
    <Box minHeight={"100vh"} bg={useColorModeValue("gray.100", "gray.800")}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
