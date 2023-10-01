import PostCard from "../components/postcard";
import getPosts from "../helpers/getPosts";
import { Container, Divider, Text, VStack } from "@chakra-ui/react"; // Use VStack to add spacing between cards
import Section from "../components/section";

const Works = ({ posts }) => (
  <Container maxWidth="4xl" css={styles.container}>
    <Section>
      <Divider orientation="horizontal" mb="60px" />

      <Text css={styles.heading} fontSize={40}>
        Work
      </Text>
    </Section>

    <VStack spacing={15} align="stretch">
      {" "}
      {/* Use VStack with spacing */}
      {posts.map((post) => (
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
      ))}
    </VStack>
  </Container>
);

const styles = {
  container: {
    marginTop: "15rem",
  },
  heading: {
    fontWeight: "600",
    marginTop: "2rem",
    marginBottom: "5rem",
    textTransform: "uppercase",
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
