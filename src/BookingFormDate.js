import { Field, Input, Button, Heading, VStack } from "@chakra-ui/react";
import { useFormik } from "formik";
import { format } from "date-fns"
import { useNavigate } from "react-router-dom"

const BookingFormDate = (props) => {
    const today = new Date();
    const formattedDate = format(today, 'yyyy-MM-dd')
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            date: formattedDate,
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
                <Button
                    type="submit"
                    fontSize="18px"
                    fontFamily="Roboto"
                    fontWeight="normal"
                    backgroundColor="#F4CE14"
                    borderRadius="10px"
                    mt="50px"
                    onClick={() => {navigate("/booking-page", {state: {date: formik.values.date}})}}
                    color="black"
                    aria-label="On Click"
                >
                    Set a date
                </Button>
            </form>
        </VStack>
    );
}

export default BookingFormDate;