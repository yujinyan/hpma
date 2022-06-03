import * as React from "react";
import tw from "twin.macro";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { AnimatedBorder } from "./animated-border";

type Props = {
  title: string
  slug: string
  cover: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

const Title = tw.h2`
font-display absolute 
left-0 right-0 bottom-[20px] w-full 
text-white text-center text-2xl lg:text-4xl
`;


const GradientOverlay = tw.div`
w-full absolute bottom-0 h-[160px]
bg-gradient-to-t from-neutral-900 to-transparent opacity-75
`;

const Cover = ({ title, cover, slug }: Props) => <div key={slug} tw="relative">
  <Link to={slug}>
    <AnimatedBorder />
    <GatsbyImage image={cover.childImageSharp.gatsbyImageData}
                 objectFit="cover"
                 objectPosition="center center"
                 tw="aspect-[4/3] w-full"
                 alt={title} />
    <GradientOverlay />
    <Title>{title}</Title>
  </Link>
</div>;

export default Cover;
