import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function Title() {
  const { site: { siteMetadata: { title } } } = useStaticQuery(graphql`
  query {
    site {
      id
      siteMetadata {
        title
      }    
    }
  }
  `)

  //data.site.siteMetadata.title
  return (
    <h1>{title}</h1>
  )
}
