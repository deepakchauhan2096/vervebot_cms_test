import React from 'react'
import Breadcrum from '../assets/components/breadcrums/Breadcrum'
import Header from '../assets/components/header/header'
import Portfoliocards from '../assets/components/portfolio/Portfoliocards'
import PortfolioPagination from '../assets/components/portfolio/PortfolioPagination'

const portfolio = () => {
    return (
        <>
            <div className="container-fluid">
                <Header/>
      <Breadcrum/>

                <div className="container">

                    <h1 className="pageTitile text-center  p-5">Portfolio</h1>
                    <h2 className="pageSubTitle text-center p-3"> <b> FEEL THE HARDWORK WE DO FOR OUR CLIENTS</b></h2>
                    <h6 className="pageSubTitle text-center p-3 ">Our Portfolio For Web & App Development</h6>
                    <PortfolioPagination />
                
                    <Portfoliocards />


                </div>
            </div>
        </>
    )
}

export default portfolio