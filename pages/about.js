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
          borderRadius="full"
          maxWidth="100%"
          objectFit="cover"
          mx="auto"
          src="/images/PXL_20211229_200055238.PORTRAIT.jpg"
          alt="Photo of Chauncey Harlan"
        />
      </Box>
      <Section>
        <Text fontFamily="Erode">
          Have you ever opened an app or tried to use a new product, only to
          feel immediately confused? It can be frustrating not knowing where to
          click or what to do next. Unfortunately, badly designed products are
          all too common. That&apos;s why I&apos;m a UX designer based in
          Louisville, KY, and my mission is to alleviate this problem. By
          experimenting with user data and visual design elements, I aim to
          create delightful experiences that lead to better outcomes for
          businesses.
          <br />
          <br />
          Although I studied History, which is not a typical academic background
          for a designer, my degree has proved to be useful in ways beyond just
          winning trivia nights. My fascination with the past has helped me
          develop a laser-sharp focus on detail in my designs, looking at and
          thinking critically about the design solutions I arrive at. When
          I&apos;m not designing, you can find me exploring sound design,
          working out at the gym, or practicing my 3D modeling skills. If
          you&apos;re interested in collaborating or chatting about design,
          please feel free to reach out to me.
        </Text>
      </Section>
    </Container>
  </Layout>
);

export default About;
export { getServerSideProps } from "../components/chakra";
