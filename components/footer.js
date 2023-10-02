import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react";
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
        <ButtonGroup variant="tertiary">
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/chauncey-harlan-ux/"
            aria-label="LinkedIn"
            icon={<FaLinkedin size="lg" />}
            marginX="2" // Adjust the horizontal margin here
          />

          <IconButton
            as="a"
            href="https://github.com/uxchar"
            aria-label="GitHub"
            icon={<FaGithub size="lg" />}
            marginX="2" // Adjust the horizontal margin here
          />
          <IconButton
            as="a"
            href="mailto:uxchar@outlook.com"
            isExternal
            aria-label="Email"
            icon={<FaEnvelope size="lg" />}
            marginX="2" // Adjust the horizontal margin here
          />
        </ButtonGroup>
      </Stack>

      <Text fontSize="sm" color="fg.subtle" textAlign="center">
        &copy; {new Date().getFullYear()} Chauncey Harlan. All rights reserved.
      </Text>
    </Stack>
  </Container>
);

export default Footer;
