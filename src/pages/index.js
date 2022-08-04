import * as React from "react";
import { Link, graphql } from "gatsby";
import Title from "../components/Title";
// markup
const linkStyle = {
  display: "block"
}
const IndexPage = ({
  data: {
    allMdx: { edges: posts },
  },
}) => {
  return (
    <main>
      <title>Home Page</title>
      <Link to="/about">About</Link>
      <Title />
      {posts.map(({ node }) => (
        <Link style={ linkStyle } key={node.id} to={node.slug}>
          {node.frontmatter.title} {node.frontmatter.date}
        </Link>
      ))}
    </main>
  );
};

export const query = graphql`
  query {
    allMdx (sort: { fields: frontmatter___date, order: DESC})  {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMM D, YYYY")
            title
          }
          slug
        }
      }
    }
  }
`;

export default IndexPage;
