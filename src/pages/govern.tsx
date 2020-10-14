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
          <h1 className="bigger-emoji">🥩</h1>
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
          <div className="text">
            <h1 className="bigger-emoji">🥩🥩</h1>
            <h3>Vote on new meta-LP proposals using equal value of $TRTR + $MEAT</h3>
          </div>
          <div className="register">
            <h3>Register to vote</h3>
            <button>
              <h3>
                Register
              </h3>
            </button>
          </div>
          <div className="lp">
            <div className="header">
              <h3>Description</h3>
              <div className="right">
                <h3>Status</h3>
                <h3>Action</h3>
              </div>
            </div>
            <div className="row">
              <p>No Active Proposals</p>
            </div>
          </div>
        <Footer/>
        </BloodBackgroundSide>
      </div>
    </Layout>
  )
}
