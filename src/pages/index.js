import { graphql, Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Subheader = styled.h3`
  color: #373737;
  max-width: 600px;
  font-size: 1em;
  align-self: flex-start;
  margin-top: 20px;
  transform: skew(3deg, 3deg);
  text-align: center;
  width: 100%;
`
const MainHeader = styled.h1`
  color: #373737;
  max-width: 600px;
  align-self: flex-start;
  margin-top: 20px;
  transform: skew(3deg, 3deg);
  text-align: center;
  width: 100%;
`

const PostPaper = styled.div`
  align-self: flex-end;
  max-width: 100%;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  transform: skew(-3deg, -3deg);
  :hover {
    transform: translate3d(10px, 10px, 0) skew(-3deg, -3deg);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

const PostExcerpt = styled.p`
  font-size: 0.8em;
`

const PostCount = styled.h4`
  align-self: flex-end;
  margin-bottom: 5px;
  transform: skew(-3deg, -3deg);
`

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 40%;
  height: 100%;
`

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 40%;
`

export default ({data}) => {
  console.log(data)
  return(
  <Layout>
    <SEO title="Home" />
    <IntroContainer>
      <MainHeader>Suki's Blog</MainHeader>
      <Subheader>{data.site.siteMetadata.description}</Subheader>
      <Subheader>{data.site.siteMetadata.introduction}</Subheader>
    </IntroContainer>
    <PostContainer>
      <PostCount>{data.allMarkdownRemark.totalCount} Posts</PostCount>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostPaper key={node.id}>
          <Link to={node.fields.slug} style={{color: "#373737"}}>
            <h3>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
            <PostExcerpt>{node.excerpt}</PostExcerpt>
          </Link>
        </PostPaper>
      ))}
    </PostContainer>
    
  </Layout>
  )
  
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter{
            date(formatString: "DD MMMM, YYYY")
            title
          }
          fields{
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        introduction
      }
    }
  }
`
