import { Container, Heading, Text, Box, Divider } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Section from "../components/section";

const About = () => (
  <Container mt="50px" maxWidth="4xl">
    <Section>
      <Divider orientation="horizontal" mb="60px" />

      <Heading css={styles.heading} fontSize={24}>
        About Me
      </Heading>
    </Section>
    <Heading fontSize={60} my={55} position="absolute" color="#82fab2">
      Hey I&rsquo;m <br /> Chauncey
    </Heading>
    <Box mx="auto" mb="30px">
      <Image
        boxSize={300}
        borderRadius="full"
        maxWidth="100%"
        objectFit="cover"
        mx="auto"
        src="/images/465DBC23-5C01-4D91-A9B4-7452D13F0D07.jpg
"
        alt="Photo of Chauncey Harlan"
      />
    </Box>
    <Section>
      <Text fontFamily="Erode">
        Opening an app or trying to use a new product, only to feel immediately
        confused is not fun. It can be frustrating not knowing where to click or
        what to do next. Unfortunately, badly designed products are all too
        common. That&apos;s why I&apos;m a UX designer based in Louisville, KY,
        and my mission is to alleviate this problem. By experimenting with user
        data and visual design elements, I aim to create delightful experiences
        that lead to better outcomes for users.
        <br />
        <br />
        Although I studied History, which is not a typical academic background
        for a designer, my degree has proved to be useful in ways beyond just
        winning trivia nights. My fascination with the past has helped me
        develop a laser-sharp focus on detail in my designs, looking at and
        thinking critically about the design solutions I arrive at. When
        I&apos;m not designing, you can find me exploring sound design, working
        out at the gym, or practicing my 3D modeling skills (interested in
        VR/AR!). If you&apos;re interested in collaborating or chatting about
        design, please feel free to reach out to me.
      </Text>
    </Section>
  </Container>
);

const styles = {
  container: {
    marginTop: "20rem",
  },
  heading: {
    fontWeight: "600",
    marginTop: "2rem",
    marginBottom: "5rem",
    textTransform: "uppercase",
    margin: "0 auto",
  },
};

export default About;
export { getServerSideProps } from "../components/chakra";
