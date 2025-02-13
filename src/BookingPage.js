import { Flex, Box } from "@chakra-ui/react"
import Header from './Header'
import BookingForm from './BookingForm'
import { useReducer } from "react";
import { useLocation } from "react-router-dom"
import { fetchAPI } from "./api"

const BookingPage = () => {
  const location = useLocation();
  const date = location.state;

  const initialState = {availableTimes: {}};

  const initializeTimes = () => {
    const selectedDate = new Date(date);
    return {availableTimes: fetchAPI(selectedDate)}
  }
  
  const updateTimes = (state, action) => {
    let newAvailableTimes = { ...state.availableTimes };
    newAvailableTimes = state.availableTimes.filter(time => time !== action.time);
    
    return {availableTimes: newAvailableTimes};
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