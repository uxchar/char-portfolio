import { Box, Heading, Divider, VStack, Center } from "@chakra-ui/react";

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
            Let&apos;s connect. You can reach me by hitting one of the links
            below!
          </Heading>
        </Center>
        {/* <Stack direction={{ base: "column", md: "row" }} spacing={4}>
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
            _hover={{ color: "#F8434C" }}
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
            _hover={{ color: "#F8434C" }}
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
            _hover={{ color: "#F8434C" }}
          >
            Linkedin
          </Button>
        </Stack> */}
      </VStack>
    </Box>
  );
}

export default Contact;
