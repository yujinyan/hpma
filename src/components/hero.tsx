/** @jsx jsx */
import * as React from "react";
import { useEffect, useState } from "react";
import { GatsbyImage, IGatsbyImageData, StaticImage } from "gatsby-plugin-image";
import tw from "twin.macro";
import { jsx } from "@emotion/react";
import { graphql, useStaticQuery } from "gatsby";
import { useSwipeable } from "react-swipeable";

const OutfitContainer = tw.div`absolute bottom-0`;

const Outfits = () => {
  const outfits = useStaticQuery<OutfitsStaticQuery>(graphql`{
  allFile(filter: {name: {glob: "outfit*"}}) {
    nodes {
      name
      childImageSharp {
        gatsbyImageData
      }
    }
  }
}`);

  // const [counter, setCounter] = useState(0);
  // const active = counter % outfits.allFile.nodes.length;

  const [active, setActive] = useState(0);
  const swipeable = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
    onSwipedLeft: () => setActive(x => Math.max(0, x - 1)),
    onSwipedRight: () => setActive(x => Math.min(outfits.allFile.nodes.length - 1, x + 1))
  });

  console.log(`active is ${active}`)

  return <div {...swipeable} className="outfits">
    {
      outfits.allFile.nodes.map((x, idx) =>
        <GatsbyImage
          key={x.name}
          image={x.childImageSharp.gatsbyImageData}
          // placeholder="none"
          // tw="absolute bottom-0 z-20 h-5/6 left-1/2"
          css={[
            tw`absolute bottom-0 z-20 h-5/6 left-1/2 transition-opacity`,
            active == idx ? tw`opacity-100` : tw`opacity-0`]
          }
          objectFit="contain"
          objectPosition="left bottom"
          alt="" />
      )
    }
  </div>;
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
