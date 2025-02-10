import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./Homepage";
import Reservation from "./Reservation";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/reservation" element={<Reservation/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
