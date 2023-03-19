import { MDXRemote } from "next-mdx-remote";
import { Container, Heading } from "@chakra-ui/react";
import getPost from "../helpers/getPost";
import getPosts from "../helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import imageSize from "rehype-img-size";
import "react-medium-image-zoom/dist/styles.css";
import { chakra } from "@chakra-ui/react";

function Post({ data, content }) {
  return (
    <Container maxW="3xl">
      <div>
        <Heading size="4xl" mt={24} mb={12} fontWeight="bold">
          {data.pageTitle}
        </Heading>

        <MDXRemote {...content} components={components} />
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
    <Image {...props} loading="lazy" mb="40px" />
  ),
  h3: (props) => (
    <chakra.h3 fontSize="2xl" mb="40px" fontWeight="700" {...props} />
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
  p: (props) => <chakra.p my="40px" {...props} />,
};
