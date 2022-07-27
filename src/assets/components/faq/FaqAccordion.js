import React, { useState } from 'react'
import { questions } from "./faqData";
import MyFaqAccordion from "./MyFaqAccordion";
import "../faq/faqaccordion.css"

const FaqAccordion = () => {
    const [data, setData] = useState(questions);
    return (
        <>
        <br/>
            <section className="faqMain ">
                <h1 className='faqtitle animationFaqHeding'>Frequently Asked Questions</h1>
                {
                    data.map((curElem) => {
                        return <MyFaqAccordion key={curElem.id} {...curElem} />
                        //here the spread operator is use to pass the the properties of the questions api
                    })
                }
            </section>
        </>
    )
}

export default FaqAccordion