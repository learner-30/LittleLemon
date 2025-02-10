import { Flex, Box } from "@chakra-ui/react"
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Homepage = () => {
    return (
        <Flex direction="column" minHeight="100vh">
          <Header />
          <Box flex="1">
            <Main />
          </Box>
          <Footer />
        </Flex>
    );
}

export default Homepage;