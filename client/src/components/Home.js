import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Introduction from './Introduction.js'
import Carousel from './Carousel.js'

//TODO merge carousel and Introduction

const Home = () => (
   <div class="container-fluid text-center">
   <Carousel />
   <Introduction />
   </div>
)
export default Home;
