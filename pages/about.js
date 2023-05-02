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
          We've all been there. We open an app or try to use new unfamiliar
          product and we're immediately confused. We don't know where to click
          or what to do next. We get frustrated and then we leave. Badly
          designed products are everywhere, but it doesn't have to be this way.
          I am a UX designer based in Louisville, KY that hopes to alleviate
          this problem. My approach is to experiment with user data and visual
          design elements in order to craft delightful experiences, which equals
          better outcomes for businesses. <br />
          <br />
          It might be surprising, but my degree is actually in History. However,
          my interest in researching the past has helped me develop an attention
          to detail in my designs, to look for patterns, and critically think
          about the conclusions I arrive at. When I&apos;m not designing, I
          enjoy exploring sound design, working out at the gym, and practicing
          my 3D modeling skills. If you&apos;re interested in collaborating or
          chatting about design, feel free to reach out.
        </Text>
      </Section>
    </Container>
  </Layout>
);

export default About;
export { getServerSideProps } from "../components/chakra";
