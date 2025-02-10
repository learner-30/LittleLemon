import restauranfood from './images/restauranfood.jpg'
import {Button, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import { Link } from "react-router-dom"
import "@fontsource/markazi-text"
import "@fontsource/roboto"

function Main() {
    return (
        <VStack 
            // marginTop="120px" 
            height="400px"
            background="linear-gradient(to bottom, #495E57 70%, transparent 70%)"
        >
            <HStack
                px={{ base: "64px", md: "290px" }}
                py="20px"
                width="100%"
                justifyContent="space-between"
            >
               <VStack
                    height="100%"
                    maxWidth="400px"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    color="#EDEFEE"
               >
                    <Heading
                        as="h2"
                        fontSize="64px"
                        fontFamily="Markazi Text"
                        fontWeight="medium"
                        color="#F4CE14"
                        // backgroundColor="blue"
                        lineHeight="0.7"
                    >
                        Little Lemon
                    </Heading>
                    <Heading
                        as="h3"
                        fontSize="40px"
                        fontFamily="Markazi Text"
                        fontWeight="normal"
                        // backgroundColor="yellow"
                        lineHeight="0.8"
                    >
                        Chicago
                    </Heading>
                    <Text
                        fontSize="20px"
                        fontFamily="Roboto"
                        fontWeight="normal"
                    >
                        We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </Text>
                    <Button
                        fontSize="18px"
                        fontFamily="Roboto"
                        fontWeight="normal"
                        backgroundColor="#F4CE14"
                        borderRadius="10px"
                        mt="10px"
                        as={Link}
                        to="/reservation"
                    >
                        Reserve a Table
                    </Button>
               </VStack>
               <Image
                    src={restauranfood}
                    alt='main image'
                    height={300}
                    width={300}
                    objectFit="cover"
                    borderRadius="10px"
                />
            </HStack>
        </VStack>
    );
}

export default Main;