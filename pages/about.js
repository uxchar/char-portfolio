import { Container, Heading, Text, Box, Divider } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Section from "../components/section";

const About = () => (
  <Container maxWidth="4xl">
    <Section>
      <Divider orientation="horizontal" mb="60px" width="100%" />

      <Heading css={styles.heading} fontSize={30}>
        About Me
      </Heading>
    </Section>
    <Heading fontSize={32} my={55} position="absolute" color="#F8434C">
      Hey I&rsquo;m <br /> Chauncey <br /> 👋🏾
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
        I wasn&apos;t always an engineer and designer in the traditional sense.
        In fact, my journey here started in the last place you&apos;d expect, a
        history classroom. Back then, I spent hours poring over books and
        piecing together the stories of the past, developing a deep love for
        patterns, problem-solving, and asking why. I never thought those skills
        would one day help me design apps and write code, but here I am.
        <br />
        <br />
        I still think a lot about people&apos;s stories, but now I approach them
        through the lens of technology. Whether it&apos;s an app, a website, or
        a product, I think about the journey people take from the moment they
        open it to the instant they achieve what they came to do. My job is to
        make that journey smooth, intuitive, and maybe even delightful.
        <br />
        <br />
        Over just the past few months, I&apos;ve had the privilege of working on
        some exciting projects: building a fitness app that helps people track
        their workouts, designing a Reddit-inspired post feed, and contributing
        to a Humana app aimed at tackling health inequality. These experiences
        taught me how powerful good design and thoughtful development can be
        when they come together.
        <br />
        <br />
        When I&apos;m not working, you might find me experimenting with sound
        design, practicing 3D modeling (hello, VR/AR!), or recharging at the
        gym. I&apos;m endlessly curious and love tackling new challenges,
        whether that&apos;s exploring a new framework or brainstorming grand
        ideas. If you&apos;re interested in working together or just want to
        talk design, dev, or anything creative, feel free to reach out!
      </Text>
    </Section>
  </Container>
);

const styles = {
  container: {
    marginTop: "20rem",
  },
  heading: {
    display: "inline",
    fontWeight: "600",
    marginTop: "2rem",
    marginBottom: "5rem",
    textTransform: "uppercase",
    margin: "0 auto",
    backgroundColor: "#393533",
    width: "auto",
  },
};

export default About;
export { getServerSideProps } from "../components/chakra";
