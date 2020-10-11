import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Footer from '../components/footer'
import BloodBackgroundCenter from '../components/blood-background-center'

export default function Home() {
  return (
    <Layout>
      <Nav/>
      <div className="not-connected">
        <BloodBackgroundCenter>
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
        </BloodBackgroundCenter>
      </div>
    </Layout>
  )
}
