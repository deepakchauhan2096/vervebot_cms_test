import React from 'react'
import { graphql } from "gatsby"
import Blogs from '../assets/components/blog/blog'
import Header from '../assets/components/header/header'
import Footer from "../assets/components/footer/Footer";
import Breadcrum from '../assets/components/breadcrums/Breadcrum';

const Blog = ({ data }) => {
  return (
    <>
      <Header />
      <Breadcrum />
      <Blogs BlogData={data} />
      <Footer />
    </>
  )
}

export default Blog

export const query = graphql`
  {
    allWpPost {
      nodes {
        commentCount
        date
        dateGmt
        title
        uri
        slug
        link
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
          }
        }
        content
        categories {
          nodes {
            name
            link
          }
        }
      }
    }
  }
`