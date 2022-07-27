import React from 'react'
import Header from '../assets/components/header/header'
import Footer from '../assets/components/footer/Footer'
import Haveidea from '../assets/components/haveIdeacard/Haveidea'
import FaqAccordion from "../assets/components/faq/FaqAccordion"
import Breadcrum from '../assets/components/breadcrums/Breadcrum'


const faq = () => {
    return (
        <>
            <Header />
            <Breadcrum/>

            <FaqAccordion />

            <Haveidea />

            <Footer />

        </>
    )
}

export default faq