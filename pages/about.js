import {
  Container,
  Heading,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Head from "next/dist/shared/lib/head";

const About = () => (
  <Layout>
    <Head>
      <title>CH Portfolio - About</title>
    </Head>
    <Container mt="100px">
      <Heading
        fontSize={50}
        my={55}
        position="absolute"
        top="-110px"
        color={useColorModeValue("#5044fc", "#82fab2")}
      >
        Hey I&rsquo;m <br /> Chauncey
      </Heading>
      <Box mx="auto" mb="30px">
        <Image
          boxSize={300}
          maxWidth="100%"
          objectFit="cover"
          mx="auto"
          src="/images/PXL_20211229_200055238.PORTRAIT.jpg"
          alt="Photo of Chauncey Harlan"
        />
      </Box>
      <Section>
        <Text fontFamily="Erode">
          I am a UX designer based in Louisville, KY that simply likes to make
          cool, useful things. My approach is to experiment with user data and
          visual design elements in order to craft delightful experiences, which
          often equals better outcomes for businesses. It might be surprising,
          but my degree is actually in History. However, my passion for
          researching the past has helped me develop an attention to detail in
          my designs. I always consider how every small element can impact the
          overall user experience. When I&apos;m not designing, I enjoy
          exploring sound design, working out, or practicing photography. If
          you&apos;re interested in collaborating or chatting about design, feel
          free to reach out.
        </Text>
      </Section>
    </Container>
  </Layout>
);

export default About;
export { getServerSideProps } from "../components/chakra";
