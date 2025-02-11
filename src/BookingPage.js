import { Flex, Box } from "@chakra-ui/react"
import Header from './Header'
import BookingForm from './BookingForm'
import { useReducer } from "react";

const BookingPage = () => {
  const initialState = {availableTimes: []};
  
  const updateTimes = (state, action) => {
    state.availableTimes = state.availableTimes.filter(time => time != action.time);
    return state;
  }
  
  const initializeTimes = () => {
    return {availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]}
  }

  const [state, dispatch] = useReducer(updateTimes, initialState, initializeTimes);

    return (
        <Flex direction="column" minHeight="100vh">
          <Header />
          <Box flex="1">
            <BookingForm times={state} dispatch={dispatch}/>
          </Box>
        </Flex>
    );
}

export default BookingPage;