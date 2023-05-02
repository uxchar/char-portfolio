import { Box, IconButton, Link, Stack, Container } from "@chakra-ui/react";
import * as Icon from "react-feather";

const Footer = () => {
  return (
    <Container mt="200px" maxW="4xl" delay="0.3">
      <Box align="center" opacity={1} mt="20px" mb="60px">
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          justifyContent="left"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          spacing={4}
        >
          <Link
            href="https://www.linkedin.com/in/chauncey-harlan-ux/"
            isExternal
          >
            <IconButton
              aria-label="LinkedIn icon"
              borderRadius="30px"
              icon={<Icon.Linkedin size={25} />}
              bg="#e7fef0"
              color="#100"
            />
          </Link>
          <Link href="mailto:uxchar@outlook.com" isExternal>
            <IconButton
              aria-label="Email icon"
              borderRadius="30px"
              icon={<Icon.Mail size={25} />}
              bg="#e7fef0"
              color="#100"
            />
          </Link>
        </Stack>
        <Stack
          direction="row"
          display={{ base: "flex", md: "none" }}
          width="full"
          justifyContent="center"
          spacing={4}
        >
          <Link
            href="https://www.linkedin.com/in/chauncey-harlan-ux/"
            isExternal
          >
            <IconButton
              aria-label="LinkedIn icon"
              borderRadius="30px"
              icon={<Icon.Linkedin size={25} />}
              bg="#e7fef0"
              color="#100"
            />
          </Link>
          <Link href="mailto:uxchar@outlook.com" isExternal>
            <IconButton
              aria-label="Email icon"
              borderRadius="30px"
              icon={<Icon.Mail size={25} />}
              bg="#e7fef0"
              color="#100"
            />
          </Link>
        </Stack>
      </Box>
    </Container>
  );
};

export default Footer;
