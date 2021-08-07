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
    getGreetings()
  })
  return (
    <main>
      <Helmet>
        <title>Shop Store | Superadmin</title>
      </Helmet>
      <h1>Shop Store</h1>
      <h3>Hi!!! Superadmin</h3>
      {console.log(message)}
    </main>
  )
}

export default IndexPage
