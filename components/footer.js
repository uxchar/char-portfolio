import { Container, Stack, Text, Divider } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <Container
    maxWidth="4xl"
    as="footer"
    role="contentinfo"
    py={{ base: "12", md: "16" }}
  >
    <Divider orientation="horizontal" mb="30px" />

    <Stack spacing={{ base: "4", md: "5" }}>
      <Stack
        justify={{ base: "center", md: "space-between" }}
        direction={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <a
          href="https://www.linkedin.com/in/chauncey-harlan-ux/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={35} />
        </a>

        <a
          href="https://github.com/uxchar"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={35} />
        </a>

        <a
          href="mailto:uxchar@outlook.com"
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={35} />
        </a>
      </Stack>

      <Text fontSize="sm" color="fg.subtle" textAlign="center">
        &copy; {new Date().getFullYear()} Chauncey Harlan. All rights reserved.
      </Text>
    </Stack>
  </Container>
);

export default Footer;
