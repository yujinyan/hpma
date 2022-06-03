import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import tw from "twin.macro";

const OutfitContainer = tw.div`absolute bottom-0`;


const Hero = () => <div tw="relative">
  <StaticImage src="../images/hufflepuff_bg.jpg" layout="fullWidth" alt="" />
  <StaticImage
    placeholder="none"
    tw="absolute bottom-0 z-20 h-5/6 left-1/2"
    // imgStyle={{height: "100%"}}
    objectFit="contain"
    objectPosition="left bottom"
    src="../../content/assets/outfits/outfit-2.png" alt="" />
</div>;

export default Hero;
