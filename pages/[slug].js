import { MDXRemote } from "next-mdx-remote";
import { useState, useEffect } from "react";
import { Container, Heading, Button, chakra } from "@chakra-ui/react";
import getPost from "../helpers/getPost";
import getPosts from "../helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import imageSize from "rehype-img-size";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { motion } from "framer-motion";

const Post = ({ data, content }) => {
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const elementColor = "#F8434C";
  const buttonColorText = "#F5F5F1";
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / windowHeight) * 100;
    setScrollProgress(scrollProgress);
    setShowBackToTopButton(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container maxW="3xl">
      <motion.div
        style={{
          height: "5px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99999,
        }}
      >
        <motion.div
          style={{
            height: "5px",
            background: elementColor,
            width: scrollProgress + "%",
            transition: "width 0.2s ease-in-out",
          }}
        />
      </motion.div>
      <div>
        <Heading size="4xl" mt={24} mb={12} fontWeight="bold">
          {data.pageTitle}
        </Heading>

        <MDXRemote
          {...content}
          components={{
            ...components,
            h4: (props) => (
              <chakra.h4
                fontSize="2xl"
                mb="40px"
                fontWeight="700"
                fontStyle="italic"
                {...props}
                color="#F8434C"
              />
            ),
          }}
        />

        {showBackToTopButton && (
          <Button
            onClick={scrollToTop}
            position="fixed"
            bottom="20px"
            right="20px"
            size="md"
            bg={elementColor}
            x
            color={buttonColorText}
            _hover="none"
          >
            Back to top
          </Button>
        )}
      </div>
    </Container>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [[imageSize, { dir: "public" }]],
    },
  });
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};
export const components = {
  img: (props) => (
    // height and width are part of the props, so they get automatically passed here with {...props}
    <Zoom>
      <Image {...props} loading="lazy" mb="40px" alt={props.alt || ""} />
    </Zoom>
  ),
  h3: (props) => (
    <chakra.h3
      fontSize="5xl"
      display="inline"
      mb="60px"
      mt="80px"
      fontWeight="700"
      {...props}
    />
  ),
  h4: (props) => (
    <chakra.h4
      fontSize="22px"
      mt="30px"
      mb="40px"
      fontWeight="100"
      {...props}
    />
  ),
  p: (props) => (
    <chakra.p my="40px" fontFamily="Erode" fontSize="18px" {...props} />
  ),
};
