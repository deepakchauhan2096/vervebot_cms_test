import React from 'react'
import "../../components/feature/feature.css";
import Carousel from '../corousel/Carousel';
// import Scale from "../../images/scale.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Seo from "../../images/seo.png";
import Web from "../../images/Web.jpeg";
// import Mobileroad from "../../images/mobileroad.jpg";
// import { faCalendar } from '@fortawesome/free-solid-svg-icons'


const Feature = () => {
    // const { mainHeading } = props;
    return (
        <>
            <div className="container-fluid featurebg">
                <div className="container feature">
                    <div className='row'>
                        {/* ......................Nav feature...................... */}
                        <div className="col-lg-6">
                            <Carousel />
                        </div>
                        <div className="col-lg-6">
                            {/* .....................feature cards.................... */}
                            <div className="feature-card">
                                <div className="image-container">
                                    <img src={Seo}  style={{width:"100%", height:"100%"}}alt='scale-img' className="feature-img" />
                                    <div>
                                        {/* <span><FontAwesomeIcon icon={faCalendar} className="" /> 12/10/2020</span> */}
                                        <button className='text-light bg-dark  rounded'style={{ width: "120px" }} >SEO</button>

                                        <h4 style={{wordSpace:"none", padding:"5px"}}>A Different Kind Of Company. A Different Kind Of SEO</h4>
                                    </div>
                                </div>
                                <div className="image-container">
                                    <img src={Web} alt='scale-img' className="feature-img" />
                                    <div>
                                        {/* <span><FontAwesomeIcon icon={faCalendar} className="" /> 12/10/2020</span> */}
                                        <button className='text-light bg-dark  rounded' style={{ width: "120px" }}>Websites</button>
                                                <h4>Websites and E-commerce platform to <br/>scale your bussiness</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Feature