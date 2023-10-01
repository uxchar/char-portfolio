import {
  Container,
  Heading,
  Box,
  Text,
  Center,
  Divider,
} from "@chakra-ui/react";
import Section from "../components/section";
import Works from "./works";
import getPosts from "../helpers/getPosts";
import { Element } from "react-scroll";
import Contact from "../components/contact";

const Home = ({ posts }) => (
  <Container mt="50px" maxW="full" width="100%">
    <Box display={{ md: "flex" }}>
      <Box flexGrow={1}>
        <Divider orientation="horizontal" mb="60px" />

        <Element name="work">
          <Center>
            <Section delay={0.2}>
              <Heading
                margin="100px auto 20px -5px"
                as="h1"
                fontSize={{ base: "40px", md: "80px" }}
                fontWeight="800"
                variant="page-title"
                textTransform="uppercase"
                maxW="full"
                width="100%"
                whiteSpace="nowrap" // Prevent text wrapping
              >
                Chauncey Harlan
              </Heading>
              <Divider orientation="horizontal" mt="60px" mb="60px" />
              <Text fontSize={16} textTransform="uppercase">
                UX Designer & Digital Explorer
              </Text>
              <Text textTransform="uppercase" justify="flex-end">
                Currently living and working in Louisville, KY <br /> United
                States
              </Text>
            </Section>
          </Center>
        </Element>
        <Element name="works">
          <Section>
            <Works posts={posts} />
          </Section>
        </Element>
        <Element name="contact">
          <Section>
            <Contact />
          </Section>
        </Element>
      </Box>
    </Box>
  </Container>
);

// Rest of your code...

export async function getStaticProps() {
  try {
    const posts = getPosts();

    if (!Array.isArray(posts)) {
      console.error("getPosts did not return an array:", posts);
      return { props: { posts: [] } };
    }

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { props: { posts: [] } };
  }
}

export default Home;
