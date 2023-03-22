import { MDXRemote } from "next-mdx-remote";
import { useState, useEffect } from "react";
import { Container, Heading } from "@chakra-ui/react";
import getPost from "../helpers/getPost";
import getPosts from "../helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import imageSize from "rehype-img-size";
import "react-medium-image-zoom/dist/styles.css";
import { Button, chakra } from "@chakra-ui/react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Post({ data, content }) {
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    setShowBackToTopButton(scrollTop > prevScrollPos);
    setPrevScrollPos(scrollTop);

    // add this line to show the button only when scrolling towards the top
    if (scrollTop < prevScrollPos) {
      setShowBackToTopButton(true);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add this useEffect hook to handle scrolling events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container maxW="3xl">
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
            colorScheme="blue"
          >
            Back to top
          </Button>
        )}
      </div>
    </Container>
  );
}

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
      // use the image size plugin, you can also specify which folder to load images from
      // in my case images are in /public/images/, so I just prepend 'public'
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
