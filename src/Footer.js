import footerImage from './images/footer_image.jpg'
import {Box, Flex, HStack, Image, VStack} from "@chakra-ui/react";

function Footer() {
    return (
        <Box backgroundColor="antiquewhite">
            <HStack
                px={{ base: "64px", md: "290px" }}
                py={16}
                justifyContent="left"
                alignItems="top"
                spaceX="50px"
            >
                <Image
                    src={footerImage}
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
                    spaceY="10px"
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