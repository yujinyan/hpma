import { graphql } from "gatsby";
import { IGatsbyImageData, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import tw from "twin.macro";
import Hero from "../components/hero";
import Cover from "../components/cover";
import Avatar from "../components/avatar";
import { AnimatedBorder } from "../components/animated-border";

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

const Footer = (props) => <div tw="relative" {...props}>
  <AnimatedBorder />
  <div tw="z-20 w-32 md:w-56" className="absolute-center">
    <StaticImage src="../images/avatar.png" tw="mb-1" alt=""/>
    <StaticImage src="../images/name.png" alt="" />
  </div>
  <StaticImage src="../images/hogwarts-lake-bg.jpg" layout="fullWidth" alt="" />
</div>;

const Gallery = ({ data }: Props) => (
  <div tw="relative">
    <Hero />
    <StaticImage
      tw="absolute top-1 left-2 w-1/5"
      src="../images/hpma.png"
      // width="250"
      placeholder="none"
      alt="Harry Potter Magic Awakened" />
    <div tw="grid grid-cols-1 md:grid-cols-2">
      {
        data.allProject.nodes.map(p =>
            <Cover key={p.slug} cover={p.cover} slug={p.slug} title={p.title} />
          // <div key={p.slug}>
          //   <GatsbyImage image={p.cover.childImageSharp.gatsbyImageData}
          //                objectFit="cover"
          //                objectPosition="center center"
          //                tw="aspect-[4/3] w-full"
          //                alt={p.title} />
          // </div>
        )
      }
      <Footer key="footer" tw="md:col-span-2" />
    </div>
  </div>
);

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