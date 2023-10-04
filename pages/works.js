import PostCard from "../components/postcard";
import getPosts from "../helpers/getPosts";
import { Container, Text, VStack } from "@chakra-ui/react";
import Section from "../components/section";
import { motion } from "framer-motion"; // Import motion

const Works = ({ posts }) => (
  <Container maxWidth="4xl" css={styles.container}>
    <Section>
      <Text css={styles.heading} fontSize={40}>
        Work
      </Text>
    </Section>

    <VStack spacing={15} align="stretch">
      {posts.map((post, index) => (
        <motion.div
          key={post.slug}
          initial={index % 2 === 0 ? { x: -1000 } : { x: 1000 }} // Initial position based on index
          animate={{ x: 0 }} // Animate to the center
          transition={{ duration: 0.5, delay: 0.2 * index }} // Animation duration and delay
        >
          <Section delay={0.4} key={post.slug}>
            <PostCard
              delay={0.3}
              image={post.data.image}
              title={post.data.title}
              date={post.data.date}
              description={post.data.description}
              tags={post.data.tags}
              slug={post.slug}
            />
          </Section>
        </motion.div>
      ))}
    </VStack>
  </Container>
);

const styles = {
  container: {
    marginTop: "25rem",
    marginBottom: "15rem",
  },
  heading: {
    display: "inline",
    fontWeight: "600",
    marginTop: "2rem",
    marginBottom: "5rem",
    textTransform: "uppercase",
    backgroundColor: "#393533",
  },
};

export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Works;
