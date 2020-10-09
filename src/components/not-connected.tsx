import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'
import Footer from './footer'

export default function NotConnected() {
  const blood = useStaticQuery(graphql`
    query BloodQuery {
      allFile(filter: {absolutePath: {regex: "/blood/"}}) {
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

  console.log(blood)
  return (
    <div className="not-connected">
      <BackgroundImage
      fluid = {blood.allFile.edges[0].node.childImageSharp.fluid}
      style = {{backgroundSize: "contain", height: '100%', width: '100%'}}
      >
        <div className="text">
          <h1>🔪</h1>
          <h1>Bienvenue le Tartare Finance</h1>
          <h3>It's always a pleasure to have you here!</h3>
        </div>
        <button>
          <h3>
            Unlock Wallet
          </h3>
        </button>
        <Footer />
      </BackgroundImage>
    </div>
  )
}
