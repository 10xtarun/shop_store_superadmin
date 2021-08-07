import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"

// markup
const IndexPage = () => {
  const [message, setMessage] = useState(null)
  useEffect(() => {
    async function getGreetings() {
      let res = await fetch('/api/greetings')
      res = await res.text()
      setMessage(res)
    }
    setTimeout(() => {
      getGreetings()
    }, 3000)
  })
  return (
    <main>
      <Helmet>
        <title>Shop Store | Superadmin</title>
      </Helmet>
      <h1>Shop Store</h1>
      <h3>Hi!!! Superadmin</h3>
      {console.log(message)}
      {message && <h4>{message + ""}</h4>}
    </main>
  )
}

export default IndexPage
