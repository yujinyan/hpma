import * as React from "react";
import tw from "twin.macro";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const Avatar = tw(GatsbyImage)`fixed top-0 left-0 m-4 z-20 w-12 md:w-24`;

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



