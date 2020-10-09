import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import NotConnected from '../components/not-connected'

export default function Home() {
  return (
    <Layout>
      <Nav/>
      <NotConnected />
    </Layout>
  )
}
