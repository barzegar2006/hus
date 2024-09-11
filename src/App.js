import { Route, Routes } from "react-router-dom"

import Header from "./Components/Header"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import Blog from "./Components/Blog"
import Contact from "./Components/Contact"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
