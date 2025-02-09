import { ChakraProvider, Flex, Box } from "@chakra-ui/react"
import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'


function App() {
  return (
    <ChakraProvider>
      <Flex direction="column" minHeight="100vh">
        <Header />
        <Box flex="1">

        </Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
