import {
  Container,
  Heading,
  Box,
  Text,
  Center,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Section from "../components/section";
import Works from "./works";
import getPosts from "../helpers/getPosts";
import { Element } from "react-scroll";
import Contact from "../components/contact";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion"; // Import motion and useAnimation
import { useEffect, useState } from "react"; // Import useEffect and useState

const Home = ({ posts }) => {
  const headingText = "Chauncey Harlan";
  const [currentText, setCurrentText] = useState("");
  const controls = useAnimation();

  useEffect(() => {
    const startTyping = async () => {
      for (let i = 0; i <= headingText.length; i++) {
        setCurrentText(headingText.slice(0, i));
        await controls.start({ opacity: 1 });
        await new Promise((resolve) => setTimeout(resolve, 10)); // Adjust typing speed here (faster)
      }
    };

    startTyping();
  }, [controls]);

  return (
    <Container mt="50px" maxW="full" width="100%">
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Divider orientation="horizontal" mb="60px" />

          <Element name="work">
            <Center>
              <Section delay={0.2}>
                <motion.div initial={{ opacity: 0 }} animate={controls}>
                  <Heading
                    margin="100px auto 20px -5px"
                    as="h1"
                    fontSize={{ base: "40px", md: "80px" }}
                    fontWeight="800"
                    variant="page-title"
                    textTransform="uppercase"
                    maxW="full"
                    width="100%"
                    whiteSpace="nowrap"
                  >
                    {currentText}
                  </Heading>
                </motion.div>
                <Divider orientation="horizontal" mt="60px" mb="60px" />
                <Text fontSize={16} textTransform="uppercase">
                  UX Designer & Digital Explorer
                </Text>
                <Text textTransform="uppercase" justify="flex-end">
                  Currently living and working in Louisville, KY <br /> United
                  States
                </Text>
                <Center>
                  <Link to="works" smooth={true}>
                    <motion.div whileHover={{ y: 10 }} whileTap={{ y: 10 }}>
                      <IconButton mt="60px">
                        <ChevronDownIcon w={10} h={10} />
                      </IconButton>
                    </motion.div>
                  </Link>
                </Center>
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
};

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
