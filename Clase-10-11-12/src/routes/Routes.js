import React from 'react'
import { BrowserRouter, Routes as ReactDomRoutes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Band from '../pages/band/Band'
import Bands from '../pages/bands/Bands'
import Home from '../pages/home/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/bands" element={ <Bands /> } />
          <Route path="/band/:id" element={ <Band /> } />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes