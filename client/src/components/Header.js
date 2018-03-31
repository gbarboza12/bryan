import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel.js'

const Header = () => (
   <header>
   <div class="header">
    <nav>
      <div class="navigation">
         <ul>
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/Family'>My Family</Link></li>
           <li><Link to='/QA'>Q&A</Link></li>
         </ul>
      </div>
    </nav>
    <Carousel />
    </div>
  </header>
)

export default Header
