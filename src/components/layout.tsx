import * as React from 'react'
import Helmet from 'react-helmet'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Helmet defer={false} >
        <title>Tartare Finance</title>
        <meta name="description" content= "Website Description" />
        <meta property="og:title" content='Website Title' />
        <meta property="og:description" content="Website Description" />
        <meta property="og:image" content='/webImage.png' />
        <meta property="og:url" content='Website Url'/>
        <meta property="og:type" content='website'/>
      </Helmet>
      {children}
    </div>
  )
}
