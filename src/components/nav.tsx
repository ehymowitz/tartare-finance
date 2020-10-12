import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link } from 'gatsby'

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
        <Link to="/" >
          <Img
            fixed = {logo.allFile.edges[0].node.childImageSharp.fixed}
          />
        </ Link>
      </div>
      <Link to="/">
        <h4>
          Home
        </h4>
      </Link>
      <Link to="/livestock">
        <h4>
          Livestock
        </h4>
      </Link>
      <Link to="/tartare">
        <h4>
          Le Tartare
        </h4>
      </Link>
      <Link to="/govern">
        <h4>
          Govern
        </h4>
      </Link>
      <Link to="/faq">
        <h4>
          FAQ
        </h4>
      </Link>
      <button>
        <h3>
          Unlock Wallet
        </h3>
      </button>
    </nav>
  )
}
