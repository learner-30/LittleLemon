import { Flex, Box } from "@chakra-ui/react"
import Header from './Header'
import BookingForm from './BookingForm'
import { useReducer } from "react";
import { useLocation } from "react-router-dom"

const BookingPage = () => {

  // copied from https://raw.githubusercontent.com/courseraap/capstone/main/api.js
  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
  }

  // copied from https://raw.githubusercontent.com/courseraap/capstone/main/api.js
  const fetchAPI = function(date) {
      let result = [];
      let random = seededRandom(date.getDate());

      for(let i = 17; i <= 23; i++) {
          if(random() < 0.5) {
              result.push(i + ':00');
          }
          if(random() < 0.5) {
              result.push(i + ':30');
          }
      }
      return result;
  };

  // copied from https://raw.githubusercontent.com/courseraap/capstone/main/api.js
  const submitAPI = function(formData) {
      return true;
  };

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