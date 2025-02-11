import {FormControl, FormLabel, Input, Select, Textarea, Box, Button, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import { useFormik } from "formik";

const BookingForm = (props) => {
    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            guests: "",
            occasion: "None",
        }
    });
    return (
        <VStack
            // height="600px"
            px={{ base: "64px", md: "290px" }}
            pb="30px"
            backgroundColor="#495E57"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Heading
                as="h2"
                fontSize="64px"
                fontFamily="Markazi Text"
                fontWeight="medium"
                color="#F4CE14"
                // lineHeight="0.7"
            >
                Reservations
            </Heading>
            <form
                style={{width: "400px", color:"#EDEFEE"}}
                onSubmit={formik.handleSubmit}
            >
                <FormControl>
                    <FormLabel htmlFor="res-date">Choose date</FormLabel>
                    <Input 
                        type="date" 
                        id="res-date" 
                        name="date"
                        {...formik.getFieldProps("date")}
                    />
                </FormControl>
                <FormControl mt="30px">
                    <FormLabel htmlFor="res-time">Choose time</FormLabel>
                    <Select 
                        id="res-time"
                        name="time"
                        {...formik.getFieldProps("time")}
                    >
                        <option value="" disabled>--Select a time --</option>
                        {props.times.availableTimes.map((time) => (
                             <option>{time}</option>
                        ))}
                    </Select>
                </FormControl>
                <FormControl mt="30px">
                    <FormLabel htmlFor="guests">Number of guests</FormLabel>
                    <Input 
                        type="number" 
                        id="guests" 
                        name="guests"
                        {...formik.getFieldProps("guests")}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.guests}
                    />
                </FormControl>
                <FormControl mt="30px">
                    <FormLabel htmlFor="occasion">Occasion</FormLabel>
                    <Select 
                        id="occasion" 
                        name="occasion"
                        {...formik.getFieldProps("occasion")}
                    >
                        <option>None</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </Select>
                </FormControl>
                <Button
                    type="submit"
                    fontSize="18px"
                    fontFamily="Roboto"
                    fontWeight="normal"
                    backgroundColor="#F4CE14"
                    borderRadius="10px"
                    mt="50px"
                    onClick={() => props.dispatch({time: formik.values.time})}
                >
                    Reserve a Table
                </Button>
            </form>
        </VStack>
    );
}

export default BookingForm;