import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

export default function Nav() {
  const logo = useStaticQuery(graphql`
    query LogoQuery {
      allFile(filter: {absolutePath: {regex: "/logo/"}}) {
        edges {
          node {
            childImageSharp {
              fixed(height: 32){
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <nav className="navbar">
      <div className="logo">
        <Img
          fixed = {logo.allFile.edges[0].node.childImageSharp.fixed}
        />
      </div>
      <a>
        <h4>
          Home
        </h4>
      </a>
      <a>
        <h4>
          Livestock
        </h4>
      </a>
      <a>
        <h4>
          Le Tartare
        </h4>
      </a>
      <a>
        <h4>
          Govern
        </h4>
      </a>
      <a>
        <h4>
          FAQ
        </h4>
      </a>
      <button>
        <h3>
          Unlock Wallet
        </h3>
      </button>
    </nav>
  )
}
