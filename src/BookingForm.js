import { Field, Input, Button, Heading, VStack } from "@chakra-ui/react";
import { NativeSelectRoot, NativeSelectField } from "./components/ui/native-select"
import { toaster } from "./components/ui/toaster"
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useLocation, useNavigate } from "react-router-dom"
import { submitAPI } from "./api"

const BookingForm = (props) => {
    const location = useLocation();
    const date = location.state;
    const navigate = useNavigate();
    const toastMessage = () => {
        toaster.create({
            description: "Booking has been confirmed",
            type: "success",
            duration: 5000
        })
    }

    const formik = useFormik({
        initialValues: {
            time: "",
            guests: 1,
            occasion: "",
        },
        onSubmit: async (values) => {
            const newValues = {...values, date: date}
            const result = await submitAPI(newValues)
            if (result === true) {
                toastMessage();
                {navigate("/confirmed-booking", {state: {newValues}})}
            } else {
                alert("Form submission failed. Please try again.")
            }
        },
        validationSchema: Yup.object({
            time: Yup.string().required("Required"),
            guests: Yup.number()
                .min(1, "Must be at least 1 guest")
                .max(10, "Must be no more than 10 guests")
                .required("Required"),
        })
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
                    <Field.Label htmlFor="res-date">Chosen date</Field.Label>
                    <Input 
                        type="date" 
                        id="res-date" 
                        name="date"
                        value={date}
                        disabled={true}
                    />
                </Field.Root>
                <Field.Root 
                    mt="30px"
                    invalid={formik.touched.time && !!formik.errors.time} 
                >
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
                    <Field.ErrorText>{formik.errors.time}</Field.ErrorText>
                </Field.Root>
                <Field.Root 
                    mt="30px" 
                    invalid={formik.touched.guests && !!formik.errors.guests} 
                >
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
                    <Field.ErrorText>{formik.errors.guests}</Field.ErrorText>
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
                    onClick={() => {props.dispatch({time: formik.values.time});}}
                    color="black"
                >
                    Reserve a Table
                </Button>
            </form>
        </VStack>
    );
}

export default BookingForm;