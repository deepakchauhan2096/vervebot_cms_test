import React from 'react'
import Cancel from '../assets/components/cancel/Cancel'
import Header from "../assets/components/header/header"
import Footer from "../assets/components/footer/Footer"
import Breadcrum from '../assets/components/breadcrums/Breadcrum'
const CancelRefund = () => {
  return (
    <>
    <Header/>
    <Breadcrum/>

  <Cancel/>
  <Footer/>
    </>
  )
}

export default CancelRefund