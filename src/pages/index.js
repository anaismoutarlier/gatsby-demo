import * as React from "react";
import { Link, graphql } from "gatsby";
import Title from "../components/Title";
// markup
const linkStyle = {
  display: "block"
}
const IndexPage = ({
  data: {
    allContentfulBlog: { edges: posts },
  },
}) => {
  return (
    <main>
      <title>Home Page</title>
      <Link to="/about">About</Link>
      <Title />
      {posts.map(({ node }) => (
        <Link style={ linkStyle } key={node.id} to={node.slug}>
          {node.title} {node.createdAt}
        </Link>
      ))}
    </main>
  );
};

//allContentful<nom du modèle>
export const query = graphql`
  query MyQuery {
    allContentfulBlog {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMM D, YYYY h:mm")
        }
      }
    }
  }
`;

export default IndexPage;
