/** @jsx jsx */
import { graphql } from "gatsby";
import { IGatsbyImageData, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { jsx } from "@emotion/react";
import tw, { GlobalStyles } from "twin.macro";
import Hero from "../components/hero";
import Cover from "../components/cover";
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


const Footer = (props: { isFullSpan?: boolean }) => {
  const isFullSpan = props.isFullSpan ?? false;
  return <div css={[tw`relative`, isFullSpan && tw`md:col-span-2`]} {...props}>
    <AnimatedBorder />
    <div tw="z-20 w-32 md:w-40" className="absolute-center">
      <StaticImage placeholder="none" src="../images/avatar.png" tw="mb-1" alt="" />
      <StaticImage placeholder="none" src="../images/name.png" alt="" />
      <div tw="m-auto text-center font-display">
        <a href="https://github.com/yujinyan/hpma" tw="no-underline text-white">GitHub</a>
      </div>
    </div>
    <StaticImage
      css={[!isFullSpan && tw`aspect-[4/3] w-full`]}
      src="../images/hogwarts-lake-bg.jpg" objectFit="cover" alt="" />
  </div>;
};

const Gallery = ({ data }: Props) => {
  const projects = data.allProject.nodes;
  return (
    <div tw="relative">
      {/*https://github.com/ben-rogerson/twin.macro/issues/590*/}
      <GlobalStyles />
      <Hero />
      <StaticImage
        tw="absolute top-1 left-2 w-1/5"
        src="../images/hpma.png"
        // width="250"
        placeholder="none"
        alt="Harry Potter Magic Awakened" />
      <div tw="grid grid-cols-1 md:grid-cols-2">
        {
          projects.map(p =>
            <Cover key={p.slug} cover={p.cover} slug={p.slug} title={p.title} />
          )
        }
        <Footer isFullSpan={projects.length % 2 == 0} key="footer" />
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