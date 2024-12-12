import Head from "next/head";
import Navbar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";
import { Analytics } from "@vercel/analytics/react";

const Main = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Chauncey's Portfolio" />
        <meta name="author" content="Chauncey Harlan" />

        <title>Chauncey Harlan Portfolio</title>
      </Head>

      <Container maxW="4xl" pt={14}>
        <Navbar />

        {children}
        <Analytics />

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
