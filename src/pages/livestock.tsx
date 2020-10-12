import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Footer from '../components/footer'
import BloodBackgroundCenter from '../components/blood-background-center'
import LivestockCard from '../components/livestock-card'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Livestock() {
  const meat = useStaticQuery(graphql`
    query LivestockQuery {
      allFile(filter: {absolutePath: {regex: "/meat/"}}) {
        edges {
          node {
            childImageSharp {
              fixed (height: 32) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Nav/>
      <div className="livestock">
        <BloodBackgroundCenter>
          <div className="text">
            <Img
              fixed = {meat.allFile.edges[0].node.childImageSharp.fixed }
            />
            <h1>Livestock</h1>
            <h3>Earn $MEAT by feeding the animals</h3>
          </div>
          <div className="livestock-grid">
            <LivestockCard title="Chicken" trade="AMPLE" emoji="🐓"/>
            <LivestockCard title="Beef" trade="YAM" emoji="🐄"/>
            <LivestockCard title="Salmon" trade="SUSHI" emoji="🐟"/>
            <LivestockCard title="Kangaroo" trade="AMPLE" emoji="🦘"/>
            <div className="letartare">
              <LivestockCard title="Le Tartare!" trade="YAM" emoji="🥩"/>
            </div>
            <LivestockCard title="Unicorn" trade="UNI" emoji="🦄"/>
            <LivestockCard title="Sheep" trade="YFI" emoji="🐑"/>
            <LivestockCard title="Porc" trade="MKR" emoji="🐖"/>
            <LivestockCard title="Buffalo" trade="DAI" emoji="🐃"/>
          </div>
          <Footer />
        </BloodBackgroundCenter>
      </div>
    </Layout>
  )
}
