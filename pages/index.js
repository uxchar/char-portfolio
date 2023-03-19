import { Container, Heading, Box } from "@chakra-ui/react";
import Section from "../components/section";

const Home = () => (
  <Container maxW="4xl">
    <Box display={{ md: "flex" }}>
      <Box flexGrow={1}>
        <Section delay={0.3}>
          <Heading
            margin="200px auto 20px -5px"
            as="h1"
            size="3xl"
            variant="page-title "
          >
            Chauncey Harlan
          </Heading>
        </Section>

        <Section delay={0.5}>
          <Heading as="h2" size={18} fontWeight="light" marginBottom={75}>
            User Experience Designer. Based in Louisville, KY.
          </Heading>
        </Section>
      </Box>
    </Box>
  </Container>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
