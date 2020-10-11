import React from 'react'

interface Props {
  title: String,
  trade: String,
  emoji: String
}

export default function LivestockCard({title, trade, emoji}: Props) {
  return (
    <div className="livestock-card">
      <div className="emoji">
        <h1>{emoji}</h1>
      </div>
      <h1>{title}</h1>
      <p>Deposit ETH/{trade} LP Tokens</p>
      <p>Earn $MEAT</p>
      <button><h3>Select</h3></button>
      <div className="amount-display">
        <p>APY</p>
        <p>%</p>
      </div>
    </div>
  )
}
