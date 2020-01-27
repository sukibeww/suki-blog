import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const IntroPaper = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 20px;
  margin: 10px;
  width: 60%;
  transform: translate3d(10px, 10px, 0) skew(1deg, 1deg);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  /* transition: all 0.3s cubic-bezier(.25,.8,.25,1); */
`

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const Back = styled.div`
  background-color: #5F3AFF;
  color: white;
  align-self: flex-start;
  margin: 5px;
  background-position: center;
  transition: background 0.3s;
  :hover{
    background: #6c4bfc radial-gradient(circle, transparent 1%, #6c4bfc 1%) center/15000%;
  }
`

const BackText = styled.h3`
  margin: 5px;
  color: white;
`


export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <IntroContainer>
        <IntroPaper>
          <Back>
            <Link style={{color: "inherit", textDecoration: "none"}} to="/">
              <BackText>Back</BackText>
            </Link>
          </Back>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </IntroPaper>
      </IntroContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`