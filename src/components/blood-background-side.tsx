import React, { ReactNode } from 'react'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

interface Props {
  children: ReactNode
}

export default function BloodBackgroundSide({children}: Props) {
  const blood = useStaticQuery(graphql`
    query BloodSideQuery {
      allFile(filter: {absolutePath: {regex: "/blood-side/"}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  // doesn't work with svgs

  return (
    <BackgroundImage
    fluid = {blood.allFile.edges[0].node.childImageSharp.fluid}
    style = {{backgroundSize: "cover", height: 'auto', width: '100vw'}}
    >
      {children}
    </BackgroundImage>
  )
}
