import {ReactComponent as Logo} from './images/Logo.svg'
import { Box, HStack, VStack } from '@chakra-ui/react';

const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Menu", href: "#" },
    { label: "Reservations", href: "#" },
    { label: "Order Online", href: "#" },
    { label: "Login", href: "#" }
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
                    <a href={item.href}>{item.label}</a>
                  ))}
                </HStack>
                <VStack 
                    display={{ base: 'flex', md: 'none' }} 
                    spacing={1}
                    alignItems="flex-start"
                    px={5}
                >
                  {navLinks.map((item) => (
                    <a href={item.href}>{item.label}</a>
                  ))}
                </VStack>
              </nav>
            </HStack>
          </Box>
        </Box>
      );
}

export default Header;