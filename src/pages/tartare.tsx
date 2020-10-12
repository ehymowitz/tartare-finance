import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Footer from '../components/footer'
import TradeCard from '../components/trade-card'
import BloodBackgroundCenter from '../components/blood-background-center'

export default function Tartare() {
  return (
    <Layout>
      <Nav/>
      <div className="tartare">
        <BloodBackgroundCenter>
          <div className="text">
            <h1 className="bigger-emoji">🥩</h1>
            <h1>Le Tartare</h1>
            <h3>Use your $MEAT to prepare some $TRTR</h3>
          </div>
          <div className="trades">
            <TradeCard title="X.XXX" subtitle="$TRTR Earned" emoji="🥩" buttonText="Harvest"/>
            <TradeCard title="X.XXX" subtitle="MEAT/ETH LP Tokens Staked" emoji="🥩" buttonText="Approve MEAT/ETH LP"/>
          </div>
          <h3>
            Everytime you stake and unstake LP tokens, the contract will automeatically harvest rewards for you!
          </h3>
          <Footer />
        </BloodBackgroundCenter>
      </div>
    </Layout>
  )
}
