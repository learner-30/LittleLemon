import restaurantImage from './images/restaurant.jpg'
import {Box, Flex, HStack, Image, VStack} from "@chakra-ui/react";

function Footer() {
    return (
        <Box backgroundColor="antiquewhite">
            <HStack
                px={16}
                py={16}
                justifyContent="left"
                alignItems="top"
                spacing={100}
            >
                <Image
                    src={restaurantImage}
                    alt='footer logo'
                    height={300}
                    width={150}
                    objectFit="cover"
                    borderRadius="10px"
                />
                <VStack
                    fontFamily="Karla"
                    fontSize={20}
                    alignItems="flex-start"
                    spacing={7}
                >
                    <Flex fontWeight="extrabold">
                        <p>Contact</p>
                    </Flex>
                    <VStack fontWeight="medium" alignItems="flex-start">
                        <p>Address</p>
                        <p>Phone number</p>
                        <p>Email</p>
                    </VStack>
                </VStack>
            </HStack>
      </Box>
    );
}

export default Footer;