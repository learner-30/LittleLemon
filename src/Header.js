import {ReactComponent as Logo} from './images/Logo.svg'
import { Box, HStack, VStack } from '@chakra-ui/react';
import { Link } from "react-router-dom"

const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/" },
    { label: "Menu", to: "/" },
    { label: "Reservations", to: "/booking-page-date" },
    { label: "Order Online", to: "/" },
    { label: "Login", to: "/" }
];

function Header() {
    return (
        <Box
          // position="fixed"
          top="0px"
          left="0px"
          right="0px"
          // height="120px"
          // backgroundColor="antiquewhite"
        >
          <Box color="black">
            <HStack
              px={{ base: "64px", md: "290px" }}
              py={4}
              justifyContent="space-between"
              alignItems="center"
              fontFamily="Karla"
              fontWeight="medium"
              fontSize={20}
            >
              <nav>
                <Logo />
              </nav>
              <nav>
                <HStack display={{ base: 'none', md: 'flex' }} spacing={8}>
                  {navLinks.map((item) => (
                    <Link to={item.to}>{item.label}</Link>
                  ))}
                </HStack>
                <VStack 
                    display={{ base: 'flex', md: 'none' }} 
                    spacing={1}
                    alignItems="flex-start"
                    px={5}
                >
                  {navLinks.map((item) => (
                    <Link to={item.to}>{item.label}</Link>
                  ))}
                </VStack>
              </nav>
            </HStack>
          </Box>
        </Box>
      );
}

export default Header;