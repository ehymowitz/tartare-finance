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

  return (
    <BackgroundImage
    fluid = {blood.allFile.edges[0].node.childImageSharp.fluid}
    style = {{backgroundSize: "contain", height: '100%', width: '100%'}}
    >
      {children}
    </BackgroundImage>
  )
}
