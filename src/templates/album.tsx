import * as React from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { graphql } from "gatsby";

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
          resize: {
            src: string
          }
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
const Project = ({ data: { project, images }, pageContext: { prev, next } }: ProjectProps) => {
// const Project = ({ pageContext: { prev, next } }) => {
  // console.log(obj);
  // const imageFade = useSpring({ config: config.slow, delay: 800, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    // <div></div>
    // <pre>{JSON.stringify(prev)}</pre>
    <div>{project.title}</div>

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
          resize(width: 800, quality: 90) {
            src
          }
        }
      }
    }
  }
`
