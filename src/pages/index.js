import * as React from "react"
import { Link } from "gatsby"
import Title from "../components/Title"
// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Link to="/about">About</Link>
      <Title />
    </main>
  )
}

export default IndexPage
