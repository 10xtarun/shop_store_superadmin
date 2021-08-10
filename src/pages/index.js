import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { Alert, AlertTitle } from "@material-ui/lab"
import { IconButton } from "@material-ui/core"
import { Close } from "@material-ui/icons"
import { Link } from "gatsby"

// markup
const IndexPage = () => {
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getGreetings() {
      let res = await fetch('/api/greetings')
      // console.log(parseFloat(res.headers.get("x-response-time")))
      if (parseFloat(res.headers.get("x-response-time")) <= 10.00) {
        res = await res.text()
        setMessage(res)
      } else {
        setError({
          severity: "error",
          title: "An error occurred.",
          description: "Server response time exceeded."
        })
      }
    }
    setTimeout(() => {
      getGreetings()
    }, 3000)
  })
  return (
    <Layout>
      <main>
        <Helmet>
          <title>Shop Store | Superadmin</title>
        </Helmet>
        {
          error &&
          <Alert
            severity={error.severity}
            action={
              <IconButton onClick={() => setError(null)}>
                <Close fontSize="inherit" />
              </IconButton>
            }
          >
            <AlertTitle>{error.title}</AlertTitle>
            <strong>{error.description}</strong>
          </Alert>
        }
        {console.log(error)}
        <h1>Shop Store</h1>
        <h3>Hi!!! Superadmin</h3>
        <Link to="/superadmin">go to superadmin</Link>
        {message && <h4>{message + ""}</h4>}
      </main>
    </Layout>
  )
}

export default IndexPage
