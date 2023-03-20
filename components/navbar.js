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
              {show ? <CloseIcon /> : <HamburgerIcon boxSize={8} />}
            </Button>
          </Box>
        </Box>
      </Container>

      {show ? (
        <Box
          pb={4}
          mt={3}
          ml={1}
          mr={4}
          display={{ base: "block", md: "none" }}
        >
          <Stack as="nav" spacing={4} justifyContent="flex">
            <LinkItem href="/works" path={path} onClick={handleToggle}>
              Work
            </LinkItem>

            <LinkItem href="/about" path={path} onClick={handleToggle}>
              About
            </LinkItem>

            <ThemeToggleButton position="relative" ml="auto" />
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
