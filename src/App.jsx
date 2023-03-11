import React from 'react'
import Header from './components/Header/Header'
import Jumbotron from "./components/Jumbotron/Jumbotron"
import Service from './components/services/service'
import Part2 from './components/part2/part2'
import Products from "../src/components/products/products";
import Order from "../../new-app/src/components/order/order"
import Question from "../src/components/question/question"
import Footer from "../src/components/Footer/footer"

function App() {
  return (
    <div>
      <Header/>
      <Jumbotron/>
      <Service/>
      <Part2/>
      <Products/>
      <Order/>
      <Question/>
      <Footer/>
    </div>
  )
}

export default App