import { graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import tw from "twin.macro";
import Hero from "../components/hero";
import Cover from "../components/cover"

type Props = {
  data: {
    allProject: {
      nodes: {
        slug: string
        title: string
        cover: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData
          }
        }
      }[]
    }
  }
}

const Gallery = ({ data }: Props) => {
  return (
    <div>
      <Hero />
      <div tw="grid grid-cols-1 md:grid-cols-2">
        {
          data.allProject.nodes.map(p =>
            <Cover key={p.slug} cover={p.cover} slug={p.slug} title={p.title}/>
            // <div key={p.slug}>
            //   <GatsbyImage image={p.cover.childImageSharp.gatsbyImageData}
            //                objectFit="cover"
            //                objectPosition="center center"
            //                tw="aspect-[4/3] w-full"
            //                alt={p.title} />
            // </div>
          )

        }
      </div>
    </div>
  );
};

const Button = tw.button`
  bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
  `;

export const query = graphql`
  query {
    allProject(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        title
        cover {
          childImageSharp {
            gatsbyImageData(width: 683, height: 512, quality: 90)
          }
        }
      }
    }
  }
`;

export default Gallery;