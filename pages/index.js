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
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Typewriter from "../components/typewriter";

const Home = ({ posts }) => {
  const [bgColor, setBgColor] = useState("initialColor");

  useEffect(() => {
    const handleScroll = () => {
      const workSection = document.querySelector('[name="works"]').offsetTop;
      const workSectionHeight =
        document.querySelector('[name="works"]').offsetHeight;

      if (
        window.scrollY >= workSection &&
        window.scrollY <= workSection + workSectionHeight
      ) {
        setBgColor("#initialColor");
      } else {
        setBgColor("initialColor");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container
      mt="50px"
      maxW="full"
      width="100%"
      bg={bgColor}
      transition="background 0.3s ease-in-out"
    >
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Divider orientation="horizontal" mt="-50px" width="100%" />

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
                  whiteSpace="nowrap"
                >
                  <Text as="span" delay={0.2}>
                    Hey, I&apos;m Chauncey
                  </Text>
                </Heading>

                <Text>
                  <Typewriter
                    size="32px"
                    text="Make yourself at home & explore my design process below 🙂"
                    delay={50}
                  />
                </Text>
                <Divider
                  orientation="horizontal"
                  mt="60px"
                  mb="60px"
                  width="100%"
                />
                <Text fontSize={16} textTransform="uppercase">
                  UX Designer
                </Text>
                <Text textTransform="uppercase" justify="flex-end">
                  Currently living and working in Louisville, KY <br /> United
                  States
                </Text>
                <Divider
                  orientation="horizontal"
                  mt="60px"
                  mb="60px"
                  width="100%"
                />
                <Center>
                  <Link to="works" smooth={true}>
                    <motion.div whileHover={{ y: 10 }} whileTap={{ y: 10 }}>
                      <IconButton
                        mt="60px"
                        aria-label="Scroll down"
                        icon={<ChevronDownIcon w={10} h={10} />}
                        _hover={{ color: "#E50914" }}
                      />
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
