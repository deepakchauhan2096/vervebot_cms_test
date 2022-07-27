import React from 'react'
import "../terms and condition/termCondition.css"
import Haveidea from '../haveIdeacard/Haveidea'

const TermsConditions = () => {

//     const data = useStaticQuery(graphql`
//     {
//       allWpPage(filter: {title: {eq: "Terms & Conditions"}}) {
//         nodes {
//             title
//           terms {
//             fieldGroupName
//             termsContent
//           }
//           uri
//         }
//       }
//     }
//   `)
//   const termtitle = data.allWpPage.nodes[0].title
//   console.log(termtitle);
    // const TCData = data.allWpPage.nodes[0].terms.termsContent
    // console.log(TCData);

    return (
        <>


        {/* ................ pre is used to see the data in json format on the webpage.................. */}

             {/* <pre>{JSON.stringify(TCData, null, 4)}</pre>   */}



            <div className="conatiner-fluid termMain pb-5">
                <div className="container ">
                    <div className="termsHeading">
                        {/* <h2 className="terms-title ">{termtitle}</h2> */}
                        <h2 className="term-title">Terms and Conditions Conditions</h2>
                    </div>


                    <div className="terms-container">
                        <div className="terms-Text">This is terms $codition page</div>
                            {/* dangerouslySetInnerHTML={{ __html: TCData }} /> */}


                    </div>


                </div>

                <Haveidea />

            </div>






        </>
    )
}

export default TermsConditions

