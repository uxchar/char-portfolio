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
      </VStack>
    </Box>
  );
}

export default Contact;
