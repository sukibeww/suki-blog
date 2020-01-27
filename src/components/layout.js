import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Content = styled.div`
  padding: 1.45rem 5vh;
  min-height: 95vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  padding: 5vw;
  background: repeating-linear-gradient(199deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px,transparent 1px, transparent 31px,rgba(0,0,0,0.03) 31px, rgba(0,0,0,0.03) 32px,transparent 32px, transparent 92px),repeating-linear-gradient(78deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px,transparent 1px, transparent 31px,rgba(0,0,0,0.03) 31px, rgba(0,0,0,0.03) 32px,transparent 32px, transparent 92px),repeating-linear-gradient(277deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px,transparent 1px, transparent 31px,rgba(0,0,0,0.03) 31px, rgba(0,0,0,0.03) 32px,transparent 32px, transparent 92px),repeating-linear-gradient(18deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px,transparent 1px, transparent 31px,rgba(0,0,0,0.03) 31px, rgba(0,0,0,0.03) 32px,transparent 32px, transparent 92px),repeating-linear-gradient(91deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px,transparent 1px, transparent 31px,rgba(0,0,0,0.03) 31px, rgba(0,0,0,0.03) 32px,transparent 32px, transparent 92px),repeating-linear-gradient(348deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px,transparent 1px, transparent 31px,rgba(0,0,0,0.03) 31px, rgba(0,0,0,0.03) 32px,transparent 32px, transparent 92px),repeating-linear-gradient(334deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px,transparent 1px, transparent 31px,rgba(0,0,0,0.03) 31px, rgba(0,0,0,0.03) 32px,transparent 32px, transparent 92px),repeating-linear-gradient(261deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px,transparent 1px, transparent 31px,rgba(0,0,0,0.03) 31px, rgba(0,0,0,0.03) 32px,transparent 32px, transparent 92px),repeating-linear-gradient(21deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px,transparent 1px, transparent 31px,rgba(0,0,0,0.03) 31px, rgba(0,0,0,0.03) 32px,transparent 32px, transparent 92px),linear-gradient(90deg, hsl(83,0%,100%),hsl(83,0%,100%));
`

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
`

const PostExcerpt = styled.p`
  font-size: 0.8em;
`

const PostCount = styled.h4`
  align-self: flex-end;
  transform: skew(-3deg, -3deg);
`

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 25%;
  height: 100%;
  overflow-y: visible;
  position: static;
`

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 80vh;
  overflow-x: hidden;
`

const PostPaper = styled.div`
  background-color: #FFFFFF;
  align-self: flex-end;
  max-width: 100%;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  transform: skew(-3deg, -3deg);
  :hover {
    transform: translate3d(5px, 5px, 0) skew(-3deg, -3deg);
    box-shadow: 0 5px 5px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
        }
      }
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
    }
  `)

  return (
    <>
      <Content> 
        <StyledMain>{children}</StyledMain>
        <PostContainer>
          <PostCount>{data.allMarkdownRemark.totalCount} Posts</PostCount>
          <PostsWrapper>
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
          </PostsWrapper>
        </PostContainer>
      </Content>
      <StyledFooter>
        © {data.site.siteMetadata.author} {new Date().getFullYear()}, Built with - 
        {`  `}
        <a style={{textDecoration: "none", color: "#542C85"}} href="https://www.gatsbyjs.org"> - Gatsby</a>
      </StyledFooter>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
