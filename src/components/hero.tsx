import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import tw from "twin.macro";

const OutfitContainer = tw.div`absolute bottom-0`;


const Hero = () => <div tw="relative">
  <StaticImage
    objectFit="cover"
    tw="aspect-[4/3] lg:aspect-video"
    src="../images/hufflepuff-bg-optimized.jpeg"
    alt="" />
  <StaticImage
    placeholder="none"
    tw="absolute bottom-0 z-20 h-5/6 left-1/2"
    objectFit="contain"
    objectPosition="left bottom"
    src="../../content/assets/outfits/outfit-2.png" alt="" />
</div>;

export default Hero;
