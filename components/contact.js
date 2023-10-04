import {
  Box,
  Button,
  Heading,
  Stack,
  Divider,
  VStack,
  Center,
} from "@chakra-ui/react";

function Contact() {
  return (
    <Box py={8}>
      <Divider orientation="horizontal" />

      <VStack spacing={10}>
        <Center>
          <Heading
            as="h1"
            fontSize="50px"
            fontWeight="700"
            variant="page-title"
            textTransform="capitalize"
            marginTop="60"
            textAlign="center"
          >
            Reach out and let&apos;s work or chat about design together.
          </Heading>
        </Center>
        <Stack direction={{ base: "column", md: "row" }} spacing={4}>
          <Button
            as="a"
            href="mailto:uxchar@outlook.com"
            isExternal
            variant="outline"
            textTransform="uppercase"
            border="none"
            color="#f0e7db"
            fontSize="14px"
            fontWeight="500"
            _hover={{ color: "#E50914" }}
          >
            Email
          </Button>
          <Button
            as="a"
            href="https://github.com/uxchar"
            variant="outline"
            textTransform="uppercase"
            border="none"
            color="#f0e7db"
            fontSize="14px"
            fontWeight="500"
            _hover={{ color: "#E50914" }}
          >
            Github
          </Button>
          <Button
            as="a"
            href="https://www.linkedin.com/in/chauncey-harlan-ux/"
            variant="outline"
            textTransform="uppercase"
            border="none"
            color="#f0e7db"
            fontSize="14px"
            fontWeight="500"
            _hover={{ color: "#E50914" }}
          >
            Linkedin
          </Button>
        </Stack>
      </VStack>
    </Box>
  );
}

export default Contact;
