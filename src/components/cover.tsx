import * as React from "react";
import tw from "twin.macro";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Link } from "gatsby";

type Props = {
  title: string
  slug: string
  cover: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}
const Border = tw.span`bg-slate-50 z-10 absolute opacity-50`;
const HorizontalBorder = tw(Border)`w-full h-px left-0`;
const VerticalBorder = tw(Border)`h-full w-px top-0`;

const LeftBorder = tw(VerticalBorder)`left-0`;
const TopBorder = tw(HorizontalBorder)`top-0`;
const RightBorder = tw(VerticalBorder)`right-0`;
const BottomBorder = tw(HorizontalBorder)`bottom-0`;

const Title = tw.h2`
font-display absolute 
left-0 right-0 bottom-[20px] w-full 
text-white text-center text-2xl lg:text-4xl
`;

/**
 * Inspired by https://www.wizardingworld.com
 */
const AnimatedBorder = () => <div tw="m-[10px] absolute w-[calc(100% - 20px)] h-[calc(100% - 20px)] box-border">
  <LeftBorder />
  <TopBorder />
  <RightBorder />
  <BottomBorder />
</div>;


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
