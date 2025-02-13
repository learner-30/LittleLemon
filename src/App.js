// import { ChakraProvider } from "@chakra-ui/react"  // v2
import { Provider } from "./components/ui/provider"  //  v3
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./Homepage";
import BookingPageDate from "./BookingPageDate";
import BookingPage from "./BookingPage";

function App() {
  return (
    <Provider defaultTheme="light">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/booking-page-date" element={<BookingPageDate/>}/>
          <Route path="/booking-page" element={<BookingPage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
