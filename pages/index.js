import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  Text,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import Paragraph from "../components/paragraph";
import Layout from "../components/layouts/main";
import Section from "../components/section";
import Linkbar from "../components/linkbar";
import { extendTheme } from "@chakra-ui/react";
import Footer from "../components/footer";

const theme = extendTheme({
  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
});
const Home = () => (
  <Container maxW="4xl">
    <Box display={{ md: "flex" }}>
      <Box flexGrow={1}>
        <Heading
          margin="200px auto 20px -5px"
          as="h1"
          size="3xl"
          variant="page-title "
        >
          Chauncey Harlan
        </Heading>
        <Section delay={0.3}>
          <Heading as="h2" size={18} fontWeight="light" marginBottom={75}>
            User Experience Designer. Based in Louisville, KY.
          </Heading>
        </Section>
      </Box>
      <Section delay={0.3}></Section>
    </Box>
  </Container>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
