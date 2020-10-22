import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Footer from '../components/footer'
import BloodBackgroundSide from '../components/blood-background-side'

export default function Govern() {
  return (
    <Layout >
      <Nav />
      <div className="govern">
        <BloodBackgroundSide>
          <h1 className="bigger-emoji tartare-emoji">🥩‍‍🍳</h1>
          <div className="text">
            <h1>Governance</h1>
            <h3>Vote on new LP proposals using $TRTR</h3>
          </div>
          <div className="register">
            <p>Register to vote</p>
            <button>
              <h3>
                Register
              </h3>
            </button>
          </div>
          {
            // refactor using <table> tags instead
          }
          <div className="lp">
            <div className="header">
              <p>Description</p>
              <div className="right">
                <p>Status</p>
                <p>Action</p>
              </div>
            </div>
            <div className="row">
              <p>Placeholder Text</p>
              <div className="right">
                <p>Executed</p>
                <button>View</button>
              </div>
            </div>
            <div className="row">
              <p>Placeholder Text</p>
              <div className="right">
                <p>Open</p>
                <button>View</button>
              </div>
            </div>
          </div>
          <Footer/>
          </BloodBackgroundSide>
        </div>
    </Layout>
  )
}
