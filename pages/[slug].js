import { MDXRemote } from "next-mdx-remote";
import { useState, useEffect } from "react";
import {
  Container,
  Heading,
  Button,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import getPost from "../helpers/getPost";
import getPosts from "../helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import imageSize from "rehype-img-size";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { motion, useScroll } from "framer-motion";

const Post = ({ data, content }) => {
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);
  const { scrollYProgress } = useScroll();
  const buttonBg = useColorModeValue("#5044fc", "#82fab2");
  const buttonColor = useColorModeValue("#f0e7db", "#221F1F");

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
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
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "10px",
          background: "'red'",
          transformOrigin: "0%",
          scaleX: scrollYProgress,
        }}
      />
      <div>
        <Heading size="4xl" mt={24} mb={12} fontWeight="bold">
          {data.pageTitle}
        </Heading>

        <MDXRemote {...content} components={components} />

        {showBackToTopButton && (
          <Button
            onClick={scrollToTop}
            position="fixed"
            bottom="20px"
            right="20px"
            size="md"
            bg={buttonBg}
            color={buttonColor}
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
    <chakra.h3 fontSize="3xl" mb="40px" mt="80px" fontWeight="700" {...props} />
  ),
  h4: (props) => (
    <chakra.h4
      fontSize="lg"
      mb="40px"
      fontWeight="700"
      fontStyle="italic"
      {...props}
    />
  ),
  p: (props) => <chakra.p my="40px" fontFamily="Erode" {...props} />,
};
