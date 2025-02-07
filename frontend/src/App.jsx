import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom"; // ❌ NU FOLOSI BrowserRouter aici!
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Box minHeight={"100vh"}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
