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
            icon={<FaLinkedin />}
            iconSize={{ base: "1.5rem", md: "2rem" }} // Set icon size here
          />
          <IconButton
            as="a"
            href="https://github.com/uxchar"
            aria-label="GitHub"
            icon={<FaGithub />}
            iconSize={{ base: "1.5rem", md: "2rem" }} // Set icon size here
          />
          <IconButton
            as="a"
            href="mailto:uxchar@outlook.com"
            isExternal
            aria-label="Email"
            icon={<FaEnvelope />}
            iconSize={{ base: "1.5rem", md: "2rem" }} // Set icon size here
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
