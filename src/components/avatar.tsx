import * as React from "react";
import tw from "twin.macro";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const Avatar = tw(GatsbyImage)`m-4 z-20`;

type AvatarStaticQuery = {
  file: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export default (props) => {
  const avatar = useStaticQuery<AvatarStaticQuery>(graphql`
    query {
      file(name: { eq: "avatar" }) {
        childImageSharp {
          gatsbyImageData(width: 140, height: 140, quality: 100, placeholder: NONE)
        }
      }
    }
  `);

  return avatar?.file?.childImageSharp?.gatsbyImageData && (
    <Avatar image={avatar.file.childImageSharp.gatsbyImageData} alt="Avatar" {...props} />
  );
  // return <Avatar image={avatar} alt="" {...props} />;
}



