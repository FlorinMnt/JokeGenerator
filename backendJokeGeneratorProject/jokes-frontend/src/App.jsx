
import React from "react"
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { Home } from './Pages/Home/home'
import { JokeManager } from './Pages/JokeManager/JokeManager'
import { Navbar } from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer"
import { Test } from './Pages/Test/Test'
import { JokesList } from "./Pages/JokesList/JokesList"






const  App = () => {

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/joke" element={<JokeManager />} />
            <Route path="/test" element={<Test />} />
            <Route path="/jokes_list" element={<JokesList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )

}
export default App;
