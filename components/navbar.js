import { useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { Link as ScrollLink } from "react-scroll";
import {
  Container,
  Box,
  Link,
  Stack,
  Flex,
  Button,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { scroller } from "react-scroll";

const LinkItem = ({ href, target, children, onClick, ...props }) => {
  // Added onClick parameter above to make sure it's available in the scope

  const router = useRouter();

  const handleClick = () => {
    if (router.pathname === "/" && href === "/") {
      scroller.scrollTo("works", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    } else if (href === "/") {
      router.push("/?scrollTo=works");
    }
  };

  const handleLinkClick = (e) => {
    handleClick();
    // Added guard clause to check onClick type before invoking it
    if (typeof onClick === "function") {
      onClick(e);
    }
  };

  return (
    <Link
      as={NextLink}
      href={href === "/" ? "#" : href} // Prevents navigating to the same route
      scroll={false}
      p={2}
      target={target}
      textDecoration="none"
      _hover={{
        textDecoration: "none",
        color: "#F8434C",
      }}
      onClick={handleLinkClick}
      {...props}
    >
      {children}
    </Link>
  );
};
const OverlayMenu = ({ isOpen, onClose, children }) => {
  const menuStyles = {
    position: "fixed",
    top: isOpen ? 0 : "100%",
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 99,
    transition: "top 0.5s ease-out",
  };

  const menuClass = isOpen ? "overlay-menu open" : "overlay-menu";

  return (
    <Box
      className={menuClass}
      style={menuStyles}
      bg="#f0e7db"
      maxW="4xl"
      mx="auto"
      h="100vh"
      overflowY="auto"
      boxShadow="xl"
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
      >
        <CloseIcon boxSize={4} color="#221F1F" />
      </Button>
      {children}
    </Box>
  );
};

const Navbar = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleToggle = () => setShow(!show);
  const isIndexPage = router.pathname === "/";

  return (
    <Box position="relative" as="nav" w="100%" zIndex={2}>
      <Container display="flex" maxW="4xl">
        <Flex align="center" mr={10} mb={5}>
          {!isMobile && (
            <>
              <LinkItem href="/" path="/">
                <Text fontSize="sm" textTransform="uppercase" fontWeight={700}>
                  Work
                </Text>
              </LinkItem>

              <LinkItem href="/about" path="/about">
                <Text fontSize="sm" textTransform="uppercase" fontWeight={700}>
                  About
                </Text>
              </LinkItem>
            </>
          )}
        </Flex>

        <Box
          display={{ base: "none", md: "block" }}
          flexGrow={70}
          mt={{ base: 4, md: 0 }}
        >
          <Stack direction="row" spacing={4} justify="flex-end">
            {isIndexPage && (
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-50}
                spy={true}
                exact="true"
                activeClass="active"
                style={{ cursor: "pointer" }}
                onClick={handleToggle}
              >
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  mt="10px"
                  textTransform="uppercase"
                  _hover={{ color: "#F8434C" }}
                  transition="color 0.3s ease-in-out"
                >
                  Let&apos;s Chat
                </Text>
              </ScrollLink>
            )}
          </Stack>
        </Box>

        <Box flex={1} align="right">
          <Box mr={2} display={{ base: "inline-block", md: "none" }}>
            <Button
              onClick={handleToggle}
              variant="ghost"
              color="#e6dbcc"
              mb="10px"
            >
              {show ? <CloseIcon boxSize={8} /> : <HamburgerIcon boxSize={8} />}
            </Button>
          </Box>
        </Box>
      </Container>

      {isMobile && (
        <OverlayMenu isOpen={show} onClose={handleToggle}>
          <Stack
            as="nav"
            spacing={4}
            alignItems="center"
            my="50%"
            justifyContent="center"
          >
            <LinkItem href="/" path="/" onClick={handleToggle}>
              <Text
                fontSize="24px"
                fontWeight="bold"
                textTransform="uppercase"
                color="#221F1F"
              >
                Work
              </Text>
            </LinkItem>

            <LinkItem href="/about" path="/about" onClick={handleToggle}>
              <Text
                fontSize="24px"
                fontWeight="bold"
                textTransform="uppercase"
                color="#221F1F"
              >
                About
              </Text>
            </LinkItem>

            {isIndexPage && (
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-50}
                spy={true}
                exact="true"
                activeClass="active"
                style={{ cursor: "pointer" }}
                _hover={{
                  textDecoration: "none",
                  color: "#F8434C",
                }}
                onClick={handleToggle}
              >
                <Text
                  fontSize="24px"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="#221F1F"
                >
                  Let&apos;s Chat
                </Text>
              </ScrollLink>
            )}
          </Stack>
        </OverlayMenu>
      )}
    </Box>
  );
};

export default Navbar;
