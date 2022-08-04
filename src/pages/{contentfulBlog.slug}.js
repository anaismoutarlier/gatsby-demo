import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

export default function Post({
  data: {
    contentfulBlog: {
      title,
      createdAt,
      body: { childMdx: { body } },
    },
  },
}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{createdAt}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
}

export const query = graphql`
  query ($id: String) {
    contentfulBlog(id: {eq: $id}) {
      id
      title
      slug
      body {
        id
        childMdx {
          id
          body
        }
      }
      createdAt(formatString: "MMM D, YYYY h:mm")
    }
  }
`;
