import React from 'react'
import TermsConditions from '../assets/components/terms and condition/TermsConditions'
import Header from "../assets/components/header/header";
import Footer from '../assets/components/footer/Footer';
import Breadcrum from '../assets/components/breadcrums/Breadcrum';

const termConditions = () => {
  return (
    <>

      <Header />
      <Breadcrum/>

      <TermsConditions />

      <Footer />
    </>
  )
}

export default termConditions