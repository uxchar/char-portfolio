import { Container, Stack, Text, Divider, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

const Footer = () => (
  <Container
    maxWidth="4xl"
    as="footer"
    role="contentinfo"
    py={{ base: "12", md: "16" }}
  >
    <Divider orientation="horizontal" mb="30px" />

    <Stack spacing={{ base: "6", md: "10" }}>
      <Stack
        justify={{ base: "center" }}
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        gap={5}
      >
        <a
          href="https://www.linkedin.com/in/chauncey-harlan-ux/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon as={FaLinkedin} boxSize={8} _hover={{ color: "#F8434C" }} />
        </a>

        <a
          href="https://github.com/uxchar"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon as={FaGithub} boxSize={8} _hover={{ color: "#F8434C" }} />
        </a>

        <a
          href="https://www.frontendmentor.io/profile/uxchar"
          aria-label="Frontend Mentor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            as={SiFrontendmentor}
            boxSize={8}
            _hover={{ color: "#F8434C" }}
          />
        </a>

        <a
          href="mailto:uxchar@outlook.com"
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon as={FaEnvelope} boxSize={8} _hover={{ color: "#F8434C" }} />
        </a>
      </Stack>

      <Text fontSize="sm" color="fg.subtle" textAlign="center">
        &copy; {new Date().getFullYear()} Chauncey Harlan. All rights reserved.
      </Text>
    </Stack>
  </Container>
);

export default Footer;
