import Head from "next/head";
import PostCard from "../components/postcard";
import getPosts from "../helpers/getPosts";
import { Container, Heading, useColorModeValue } from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";

const Works = ({ posts }) => (
  <Layout>
    <Head>
      <title>CH Portfolio - Work</title>
    </Head>
    <Container maxWidth="4xl" css={styles.container}>
      <Section>
        <Heading
          css={styles.heading}
          color={useColorModeValue("#5044fc", "#85fab2")}
        >
          Work
        </Heading>
      </Section>

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
    </Container>
  </Layout>
);

const styles = {
  container: {
    marginTop: "4rem",
  },
  heading: {
    fontWeight: "700",
    fontSize: "40px",
    marginTop: "2rem",
    marginBottom: "5rem",
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
