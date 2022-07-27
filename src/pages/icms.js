import React from 'react'
import Haveidea from '../assets/components/haveIdeacard/Haveidea';
import Icmscard from '../assets/components/icms/Icmscard'
import teamStruc_img from "../assets/images/customer.jpeg";
import "../assets/components/icms/icms.css"
import Footer from '../assets/components/footer/Footer';
import Header from '../assets/components/header/header';
import Breadcrum from '../assets/components/breadcrums/Breadcrum';
import ClientPagination from '../assets/components/icms/ClientPagination';



const icms = () => {
    return (
        <>
            <Header />
            < Breadcrum />


            <div className="container-fluid">
                <div className="mainbgicms ">

                    <div className="container ">
                        <div className="icmsbg">
                            <h1 className='icmsMainHeading'>ICMS</h1><br />
                            <h2 className="howworks animationIcmsHeding">How It Works</h2>

                            {/*........................... vedio youtube ........................................ */}
                            <div className="youTubevideo">
                                <iframe width="100%" height="500" src="https://www.youtube.com/embed/xo6327lBB4E" title="YouTube video player"
                                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />

                            </div>
                            {/* discount card................................. */}
                            <div className="discountCard">
                                <h1 className="discountTitle">
                                    Contact Now and Get Instant Discount
                                </h1>
                                <h2 className="discountPrice" >Price: $18000</h2>
                            </div>

                            {/*................... cards crown ..................... */}
                            <div className="cardsCrown">
                                <Icmscard />
                            </div>
                            <div className="teamStructure">
                                <img className="teamStructureImg" src={teamStruc_img} alt="" />
                            </div>
                            <div className="client">
                        <h2 className="clientTitle">Our Client</h2>
                        <ClientPagination/>
                    </div>
                            <div className="havidea">
                                <Haveidea />
                            </div>



                        </div>
                    </div>
                </div>






            </div>
            <Footer />

        </>
    )
}

export default icms