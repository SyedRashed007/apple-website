import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Highlight from "./components/Highlight"
import Model from "./components/Model"
import Features from "./components/Features"

// import * as Sentry from "@sentry/react"

const App = () => {
  // return <button onClick={() => methodDoesNotExist()}>Break the world</button>;
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
      <Features/>
    </main>
  )
}

export default App;