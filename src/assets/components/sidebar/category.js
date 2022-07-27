import React from 'react'
import "./category.css"
// import bussiness from "../../images/bussinessimg.jpg";
import Seo from "../../images/seo.png";
// import vedio from "../../images/vedio.jpg";
import Branding from "../../images/branding.jpg";
// import audio from "../../images/audio.jpg";
// import img1 from "../../images/img1.jpg"
import Iot from "../../images/iot.png";


const Category = () => {
    return (
        <div>
            <div className="row">
                <div className="category_sidebar_container">
                    <div className="cate_banner"><p>Category</p></div>
                </div>
            </div>

            <div className="row" style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}>
                <div className="category_sidebar">
                    <div className="bussiness">
                        <img src={Iot} alt='Bussiness' className="business-img" style={{width:"100%", height:"100%", }} />
                        <button className=' p-2'>IOT</button>
                    </div>
                    <div className="bussiness">
                        <img src={Seo} alt='Food & Health' className="business-img" style={{width:"100%", height:"100%", }} />
                        <button className=' p-2'>Digital Marketing</button>
                    </div>
                    <div className="bussiness text-center">
                        <img src={Branding} style={{width:"100%", height:"100%", }} alt='vedio' className="business-img" />

                        <button className='p-2'>Branding</button>
                        
                    </div>
                    {/* <div className="bussiness">
                        <img src={images} alt='images' className="business-img" />

                        <button>Image</button>
                    </div> */}
                    {/* <div className="bussiness">
                        <img src={audio} alt='audio' className="business-img" />

                        <button>Audio</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Category