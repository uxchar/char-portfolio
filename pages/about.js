import { Container, Heading, Text, Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Head from "next/dist/shared/lib/head";

const About = () => (
  <Layout>
    <Head>
      <title>CH Portfolio - About</title>
    </Head>
    <Container>
      <Heading fontSize={30} my={20} mx="auto" textAlign="center">
        Hey I'm Chauncey👋🏾
      </Heading>
      <Box mx="auto" mb="30px">
        <Image
          boxSize={300}
          borderRadius="5%"
          maxWidth="100%"
          height="auto"
          objectFit="cover"
          mx="auto"
          src="/images/PXL_20211229_200055238.PORTRAIT.jpg"
          alt="Chauncey Harlan"
        />
      </Box>
      <Section>
        <Text>
          I'm a UX designer based in Louisville, KY and I'm all about creating
          digital experiences that put a smile on people's faces. But here's a
          fun fact about me - I actually have a degree in History! I've found
          that my passion for researching the past has actually helped me
          develop a keen eye for detail in my designs. From the tiniest pixel to
          the overall user experience, I'm always thinking about how every
          little thing can impact the end result. When I'm not designing, you
          can find me exploring sound design, diving into a good book, or trying
          to capture the perfect shot with my camera. Want to collaborate or
          talk design? Let's chat!
        </Text>
      </Section>
    </Container>
  </Layout>
);

export default About;
export { getServerSideProps } from "../components/chakra";
