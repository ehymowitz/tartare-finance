import React from 'react'

interface Props {
  title: String,
  subtitle: String,
  emoji: String
  buttonText: String
}

export default function TradeCard({title, subtitle, emoji, buttonText}: Props) {
  return (
    <div className="trade-card">
      <div className={emoji==="🥩🍳" ? "emoji tartare-emoji" : "emoji"}>
        <h1 className={emoji==="🥩🍳" ? "tartare-emoji" : ""}>{emoji}</h1>
      </div>
      <div className="text">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <button><h3>{buttonText}</h3></button>
    </div>
  )
}
