import { Field, Input, Button, Heading, VStack } from "@chakra-ui/react";
import { NativeSelectRoot, NativeSelectField } from "./components/ui/native-select"
import { useFormik } from "formik";

const BookingForm = (props) => {
    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            guests: "",
            occasion: "",
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
                lineHeight="1.0"
                mt="10px"
            >
                Reservations
            </Heading>
            <form
                style={{width: "400px", color:"#EDEFEE"}}
                onSubmit={formik.handleSubmit}
            >
                <Field.Root>
                    <Field.Label htmlFor="res-date">Choose date</Field.Label>
                    <Input 
                        type="date" 
                        id="res-date" 
                        name="date"
                        {...formik.getFieldProps("date")}
                    />
                </Field.Root>
                <Field.Root mt="30px">
                    <Field.Label htmlFor="res-time">Choose time</Field.Label>
                    <NativeSelectRoot>
                        <NativeSelectField 
                            id="res-time" 
                            name="time"
                            {...formik.getFieldProps("time")}
                            placeholder="Select time"
                        >
                            {props.times.availableTimes.map((time) => (
                                <option value={time}>{time}</option>
                            ))}
                        </NativeSelectField>
                    </NativeSelectRoot>
                </Field.Root>
                <Field.Root mt="30px">
                    <Field.Label htmlFor="guests">Number of guests</Field.Label>
                    <Input 
                        type="number" 
                        id="guests" 
                        name="guests"
                        {...formik.getFieldProps("guests")}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.guests}
                    />
                </Field.Root>
                <Field.Root mt="30px">
                    <Field.Label htmlFor="occasion">Occasion</Field.Label>
                    <NativeSelectRoot>
                        <NativeSelectField 
                            id="occasion" 
                            name="occasion"
                            {...formik.getFieldProps("occasion")}
                            placeholder="Select occasion"
                        >
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </NativeSelectField>
                    </NativeSelectRoot>
                </Field.Root>
                <Button
                    type="submit"
                    fontSize="18px"
                    fontFamily="Roboto"
                    fontWeight="normal"
                    backgroundColor="#F4CE14"
                    borderRadius="10px"
                    mt="50px"
                    onClick={() => props.dispatch({time: formik.values.time})}
                    color="black"
                >
                    Reserve a Table
                </Button>
                <p>{formik.values.time}</p>
            </form>
        </VStack>
    );
}

export default BookingForm;