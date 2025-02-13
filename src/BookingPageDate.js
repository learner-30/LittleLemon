import { Flex, Box } from "@chakra-ui/react"
import Header from './Header'
import BookingFormDate from './BookingFormDate'

const BookingPageDate = () => {
    return (
        <Flex direction="column" minHeight="100vh">
          <Header />
          <Box flex="1">
            <BookingFormDate />
          </Box>
        </Flex>
    );
}

export default BookingPageDate;