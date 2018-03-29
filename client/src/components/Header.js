import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel.js'

const Header = () => (
   <header>
   <div class="header">
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/QA'>Q&A</Link></li>
      </ul>
    </nav>
    <Carousel />
    </div>
    </header>
)

export default Header
