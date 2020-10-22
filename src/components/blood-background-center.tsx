import React, { ReactNode } from 'react'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

interface Props {
  children: ReactNode
}

export default function BloodBackgroundCenter({children}: Props) {
  const blood = useStaticQuery(graphql`
    query BloodCenterQuery {
      allFile(filter: {absolutePath: {regex: "/blood-center/"}}) {
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
