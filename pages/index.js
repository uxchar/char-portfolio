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
import { useEffect } from "react";
import { useRouter } from "next/router";
import { scroller } from "react-scroll";

const Home = ({ posts }) => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.scrollTo === "works") {
      scroller.scrollTo("works", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [router.query.scrollTo]);

  return (
    <Container
      mt="50px"
      maxW="full"
      width="100%"
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
                  fontSize={{ base: "50px", md: "80px" }}
                  fontWeight="800"
                  variant="page-title"
                  textTransform="uppercase"
                  maxW="full"
                  width="100%"
                >
                  <Text as="span" delay={0.2}>
                    Hey, I&apos;m Chauncey. I am a UX/UI Designer currently
                    living and working in Louisville, KY.
                  </Text>
                </Heading>
                <Center>
                  <Link to="works" smooth={true}>
                    <motion.div whileHover={{ y: 10 }} whileTap={{ y: 10 }}>
                      <IconButton
                        mt="30px"
                        aria-label="Scroll down"
                        icon={<ChevronDownIcon w={10} h={10} />}
                        _hover={{ color: "#F8434C" }}
                      />
                    </motion.div>
                  </Link>
                </Center>
                <Divider
                  orientation="horizontal"
                  mt="60px"
                  mb="60px"
                  width="100%"
                />
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
