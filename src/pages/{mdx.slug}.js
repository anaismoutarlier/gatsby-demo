import React from 'react'
import { graphql } from "gatsby";
import { MDXRenderer } from 'gatsby-plugin-mdx';

export default function Post({ data: { mdx: { frontmatter: { title }, body } } }) {
  return (
    <div>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        date
        title
      }
      body
    }
  }
`