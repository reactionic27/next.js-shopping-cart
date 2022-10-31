import { useShoppingCart } from "@/context/ShoppingCartContext";
import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaBolt, FaShoppingCart, FaSearch } from "react-icons/fa";
import DrawerComponent from "./Drawer";

const Header: React.FunctionComponent = () => {
  const { inputSearchedTerm } = useShoppingCart();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerRef = useRef();

  return (
    <>
      <Box
        as="nav"
        py="6"
        fontSize="3xl"
        borderBottom="1px solid #eee"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="2"
        bg="white"
      >
        <Container maxW="6xl">
          <Flex alignItems="center" justifyContent="space-between">
            <FaBolt />

            {/* search option  */}
            <InputGroup mx="10px" maxW="25em">
              <InputLeftElement pointerEvents="none">
                <FaSearch color="gray.300" />
              </InputLeftElement>

              <Input
                placeholder="Search"
                size="md"
                variant="filled"
                onChange={(e) => inputSearchedTerm(e.target.value)}
              />
            </InputGroup>

            {/* Cart option  */}
            <Flex fontSize="4xl" alignItems="center" justifyContent="center">
              <Button ref={drawerRef} onClick={onOpen}>
                <FaShoppingCart fontSize="26px" />
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Drawer option  */}
      <DrawerComponent
        isOpen={isOpen}
        onClose={onClose}
        drawerHeader="Your Cart"
      />
    </>
  );
};

export default Header;
