/** @jsx jsx */
import * as React from "react";
import { useEffect, useState } from "react";
import { GatsbyImage, IGatsbyImageData, StaticImage } from "gatsby-plugin-image";
import tw from "twin.macro";
import { jsx } from "@emotion/react";
import { graphql, useStaticQuery } from "gatsby";
import { useSwipeable } from "react-swipeable";

const OutfitContainer = tw.div`absolute bottom-0`;
// const Dot = ({ isActive }) => tw.li`bg-white opacity-50 m-0`;
const Dot = ({ isActive }) => (
  // <li css={[tw`block text-white m-0 text-[18px]`, !isActive && tw`opacity-50`]} />
  <div css={[tw`block bg-white w-[6px] h-[6px] m-0 mr-2 text-[18px] rounded-full`, !isActive && tw`opacity-50`]} />
  // <span css={[tw`text-white m-0 text-[48px] md:text-[72px]`, !isActive && tw`opacity-20`]}>·</span>
);

const Line = tw.div`h-[1px] bg-white opacity-20 w-[25vw] mr-8`;

const Outfits = () => {
  const outfits = useStaticQuery<OutfitsStaticQuery>(graphql`{
  allFile(filter: {name: {glob: "outfit*"}}) {
    nodes {
      name
      childImageSharp {
        gatsbyImageData(placeholder:NONE)
      }
    }
  }
}`);

  // const [counter, setCounter] = useState(0);
  // const active = counter % outfits.allFile.nodes.length;

  const N = outfits.allFile.nodes.length;

  const [active, setActive] = useState(0);
  const swipeable = useSwipeable({
    onSwipedLeft: () => setActive(x => Math.min(N - 1, x + 1)),
    onSwipedRight: () => setActive(x => Math.max(0, x - 1))
  });

  console.log(`active is ${active}`);
  return <>
    <div tw="bottom-0  md:m-5 h-[32px] flex items-center absolute z-20 ">
      <Line />
      {
        outfits.allFile.nodes.map((_, idx) =>
          <Dot key={idx} isActive={idx == active} />)
      }
    </div>
    <div{...swipeable} onClick={() => {
      setActive(x => {
        if (x == N - 1) return 0;
        else return x + 1;
      });
    }}>
      {
        outfits.allFile.nodes.map((x, idx) =>
          <GatsbyImage
            key={x.name}
            image={x.childImageSharp.gatsbyImageData}
            // tw="absolute bottom-0 z-20 h-5/6 left-1/2"
            css={[
              tw`absolute bottom-0 z-20 h-5/6 left-1/2 transition-opacity drop-shadow-lg`,
              active == idx ? tw`opacity-100` : tw`opacity-0`]
            }
            imgClassName="drop-shadow-lg"
            objectFit="contain"
            objectPosition="left bottom"
            alt="" />
        )
      }
    </div>
  </>;
};


const Hero = () => {
  return <div tw="relative">
    <Outfits></Outfits>
    <StaticImage
      objectFit="cover"
      tw="aspect-[4/3] lg:aspect-video"
      src="../images/hufflepuff-bg-optimized.jpeg"
      alt="" />
    {/*<StaticImage*/}
    {/*  placeholder="none"*/}
    {/*  tw="absolute bottom-0 z-20 h-5/6 left-1/2"*/}
    {/*  objectFit="contain"*/}
    {/*  objectPosition="left bottom"*/}
    {/*  src="../../content/assets/outfits/outfit-4.png" alt="" />*/}
  </div>;
};

type OutfitsStaticQuery = {
  allFile: {
    nodes: {
      name: string
      childImageSharp: { gatsbyImageData: IGatsbyImageData }
    }[]
  }
}
export default Hero;
