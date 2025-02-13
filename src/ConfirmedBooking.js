import { Box, Button, Field, Flex, Input, Heading, VStack } from "@chakra-ui/react"
import { NativeSelectRoot, NativeSelectField } from "./components/ui/native-select"
import Header from './Header'
import { useLocation } from "react-router-dom"

const ConfirmedBooking = () => {
  const location = useLocation();
  const date = location.state.date;
  const time = location.state.time;
  const guests = location.state.guests;
  const occasion = location.state.occasion;

  return (
      <Flex direction="column" minHeight="100vh">
        <Header />
        <Box flex="1">
          <VStack
              // height="600px"
              px={{ base: "64px", md: "290px" }}
              pb="30px"
              backgroundColor="#495E57"
              justifyContent="flex-start"
              alignItems="flex-start"
          >
              <form
                  style={{width: "400px", color:"#EDEFEE"}}
              >
                  <Field.Root mt="30px">
                      <Field.Label htmlFor="res-date">Chosen date</Field.Label>
                      <Input 
                          type="date" 
                          id="res-date" 
                          name="date"
                          value={date}
                          disabled={true}
                      />
                  </Field.Root>
                  <Field.Root mt="30px">
                      <Field.Label htmlFor="res-time">Chosen time</Field.Label>
                      <Input 
                          type="text"
                          id="res-time" 
                          name="time"
                          value={time}
                          disabled={true}
                      />
                  </Field.Root>
                  <Field.Root mt="30px">
                      <Field.Label htmlFor="guests">Number of guests</Field.Label>
                      <Input 
                          type="number" 
                          id="guests" 
                          name="guests"
                          value={guests}
                          disabled={true}
                      />
                  </Field.Root>
                  <Field.Root mt="30px" mb="10px">
                      <Field.Label htmlFor="occasion">Occasion</Field.Label>
                      <Input 
                          type="text"
                          id="occasion" 
                          name="occasion"
                          value={occasion}
                          disabled={true}
                      />
                  </Field.Root>
              </form>
          </VStack>
        </Box>
      </Flex>
  );
}

export default ConfirmedBooking;