import { useState } from "react";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  useColorModeValue,
  Button,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("#221F1F", "#f0e7db");
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? "grassTeal" : undefined}
      color={active ? "#221F1F" : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const OverlayMenu = ({ isOpen, onClose, children }) => {
  const menuStyles = {
    position: "fixed",
    top: isOpen ? 0 : "-110%",
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 99,
    transition: "top 0.5s ease-out",
  };

  // Add animation class when menu is opened
  const menuClass = isOpen ? "overlay-menu open" : "overlay-menu";

  return (
    <Box
      className={menuClass}
      style={menuStyles}
      bg={useColorModeValue("#221F1F", "#f0e7db")}
      maxW="4xl"
      mx="auto"
      h="100vh"
      overflowY="auto"
      boxShadow="xl"
      p={6}
      onClick={(e) => e.stopPropagation()}
      position="relative"
    >
      <Button
        position="absolute"
        top={0}
        right={0}
        mt={2}
        mr={2}
        onClick={onClose}
        variant="ghost"
        color={useColorModeValue("#f0e7db", "#221F1F")}
        _hover={{ bg: useColorModeValue("gray.100", "whiteAlpha.100") }}
      >
        <CloseIcon boxSize={4} />
      </Button>
      {children}
    </Box>
  );
};

const Navbar = (props) => {
  const { path } = props;
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Box position="relative" as="nav" w="100%" zIndex={2} {...props}>
      <Container display="flex" maxW="4xl">
        <Flex align="center" mr={10}>
          <Heading
            position="fixed"
            as="h1"
            size="md"
            marginLeft="-10px"
            letterSpacing={"tighter"}
          >
            <LinkItem href="/" path={path}>
              CH
            </LinkItem>
          </Heading>
        </Flex>

        <Box
          display={{ base: "none", md: "block" }}
          flexGrow={70}
          mt={{ base: 4, md: 0 }}
        >
          <Stack direction="row" spacing={4} justify="flex-end">
            <LinkItem href="/works" path={path}>
              <Text fontSize="sm" textTransform="uppercase" fontWeight={700}>
                Work
              </Text>
            </LinkItem>

            <LinkItem href="/about" path={path}>
              <Text fontSize="sm" textTransform="uppercase" fontWeight={700}>
                About
              </Text>
            </LinkItem>
            <ThemeToggleButton />
          </Stack>
        </Box>

        <Box flex={1} align="right">
          <Box mr={2} display={{ base: "inline-block", md: "none" }}>
            <Button onClick={handleToggle} variant="ghost">
              {show ? " " : <HamburgerIcon boxSize={8} />}
            </Button>
          </Box>
        </Box>
      </Container>

      <OverlayMenu isOpen={show} onClose={handleToggle}>
        <Stack
          as="nav"
          spacing={4}
          alignItems="center"
          my="50%"
          justifyContent="center"
        >
          <LinkItem
            href="/works"
            path={path}
            onClick={handleToggle}
            fontSize="32px"
            fontWeight="bold"
            color={useColorModeValue("#f0e7db", "#221F1F")}
          >
            Work
          </LinkItem>

          <LinkItem
            href="/about"
            path={path}
            onClick={handleToggle}
            fontSize="32px"
            fontWeight="bold"
            color={useColorModeValue("#f0e7db", "#221F1F")}
          >
            About
          </LinkItem>

          <ThemeToggleButton />
        </Stack>
      </OverlayMenu>
    </Box>
  );
};

export default Navbar;
