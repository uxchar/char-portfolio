import { forwardRef } from "react";
import NextLink from "next/link";
import * as Icon from "react-feather";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Image,
  Text,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? "grassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

const Linkbar = (props) => {
  const { path } = props;

  return (
    <Box
      as="nav"
      w="50%"
      h="55px"
      bg={useColorModeValue("#63942494", "#1b1b1b")}
      borderRadius="30px"
      css={{ backdropFilter: "blur(10px)" }}
      {...props}
    >
      <Container display="flex" maxW="container.md" wrap="wrap" align="center">
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          flexGrow={1}
          justifyContent="center"
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            <IconButton
              background="none"
              borderRadius="30px"
              aria-label="pen icon for work section"
            >
              <Icon.PenTool size={23} />
            </IconButton>
            <Text marginTop="10px" fontSize="xs">
              Work
            </Text>
          </LinkItem>
          <LinkItem href="/about" path={path}>
            <IconButton
              background="none"
              borderRadius="30px"
              aria-label="i icon to go to about page"
            >
              <Icon.Info size={23} />
            </IconButton>
            <Text marginTop="10px" fontSize="xs">
              About
            </Text>
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            <IconButton
              background="none"
              borderRadius="30px"
              aria-label="plane icon to go to contact page"
            >
              <Icon.Send size={23} />
            </IconButton>
            <Text marginTop="10px" fontSize="xs">
              Contact
            </Text>
          </LinkItem>
          <ThemeToggleButton />
        </Stack>
      </Container>
    </Box>
  );
};

export default Linkbar;
