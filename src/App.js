import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/booking-page" element={<BookingPage/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
