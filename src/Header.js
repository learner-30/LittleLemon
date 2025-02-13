import {ReactComponent as Logo} from './images/Logo.svg'
import { Box, HStack, VStack } from '@chakra-ui/react';
import { NavLink } from "react-router-dom"

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
                <HStack display={{ base: 'none', md: 'flex' }} spaceX={5}>
                  <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
                  <a>About</a>
                  <a>Menu</a>
                  <NavLink to="/booking-page-date" className={({ isActive }) => isActive ? "active-link" : ""}>Reservations</NavLink>
                  <a>Order Online</a>
                  <a>Login</a>
                </HStack>
                <VStack 
                    display={{ base: 'flex', md: 'none' }} 
                    spacing={1}
                    alignItems="flex-start"
                    px={5}
                >
                  <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
                  <a>About</a>
                  <a>Menu</a>
                  <NavLink to="/booking-page-date" className={({ isActive }) => isActive ? "active-link" : ""}>Reservations</NavLink>
                  <a>Order Online</a>
                  <a>Login</a>
                </VStack>
              </nav>
            </HStack>
          </Box>
        </Box>
      );
}

export default Header;