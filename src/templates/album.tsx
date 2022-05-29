import * as React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import Cover from "../components/cover";
import tw from "twin.macro";
import Avatar from "../components/avatar";

type ProjectProps = {
  data: {
    project: {
      body: string
      excerpt: string
      date: string
      slug: string
      title: string
      areas: string[]
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
    images: {
      nodes: {
        name: string
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }[]
    }
  }
  pageContext: {
    prev: {
      slug: string
      parent: {
        fileAbsolutePath: string
      }
      title: string
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
    next: {
      slug: string
      parent: {
        fileAbsolutePath: string
      }
      title: string
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
  [key: string]: any
}

const Container = tw.div``;


const Project = ({ data: { project, images }, pageContext: { prev, next } }: ProjectProps) => {
// const Project = ({ pageContext: { prev, next } }) => {
  // console.log(obj);
  // const imageFade = useSpring({ config: config.slow, delay: 800, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Container>
      <Link to="/"><Avatar /></Link>
      {
        images.nodes.map((image, index) => (
          index == 0 ?
            <Cover key={image.name} title={project.title} slug={project.slug} cover={image} /> :
            <GatsbyImage key={image.name} image={image.childImageSharp.gatsbyImageData} alt="" />

        ))
      }
    </Container>


    // <Layout>
    //   <SEO
    //     title={project.title}
    //     description={project.excerpt}
    //     pathname={project.slug}
    //     image={project.cover.childImageSharp.resize.src}
    //   />
    //   <HeaderProject title={project.title} description={project.body} areas={project.areas} date={project.date} />
    //   <Container sx={{ mt: [`-6rem`, `-6rem`, `-8rem`] }}>
    //     {images.nodes.map((image) => (
    //       <animated.div key={image.name} style={imageFade}>
    //         <GatsbyImage
    //           image={image.childImageSharp.gatsbyImageData}
    //           alt={image.name}
    //           sx={{ mb: [4, 4, 5], boxShadow: `xl` }}
    //         />
    //       </animated.div>
    //     ))}
    //     <ProjectPagination prev={prev} next={next} />
    //   </Container>
    // </Layout>
  );
};

export default Project;


export const query = graphql`
  query ($slug: String!, $absolutePathRegex: String!, $formatString: String!) {
    images: allFile(
      filter: {
        absolutePath: { regex: $absolutePathRegex }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(width: 1600, quality: 90)
        }
      }
    }
    project(slug: { eq: $slug }) {
      body
      excerpt
      date(formatString: $formatString)
      slug
      title
      areas
      cover {
        childImageSharp {
          gatsbyImageData(width: 1600, quality: 90)
        }
      }
    }
  }
`;
