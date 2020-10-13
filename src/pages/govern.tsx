import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Footer from '../components/footer'
import BloodBackgroundSide from '../components/blood-background-side'

export default function Govern() {
  return (
    <Layout >
    {
      // <BloodBackgroundSide>
    }
        <Nav />
        <div className="govern">
        <p>TBD</p>
        <Footer/>
        </div>
    {
      // </BloodBackgroundSide>
    }
    </Layout>
  )
}
