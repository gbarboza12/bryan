import React, { Component } from 'react';
import Slider from 'react-slick'
import bryan1 from '../images/bryan1.jpg';
import bryan2 from '../images/bryan2.jpg';
import bryan3 from '../images/bryan3.jpg';
import '../Carousel.css';

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block'}}
      onClick={onClick}
    ></div>
  );
}
class Carousel extends Component{
   render() {
    var settings = {
      dots: true,
      nextArrow: <SampleNextArrow />,
      autoplay: true,
      autoplaySpeed: 5000,
      centerMode: true,
      centerPadding: '0px'
    }
    return (
      <div class="carousel">
         <div id="myCarousel" class="Carousel-body sc" data-ride="carousel">
           <Slider {...settings}>
             <div><img class="img-responsive" src={bryan1} alt="bryan"/></div>
             <div><img class="img-responsive" src={bryan2} alt="bryan"/></div>
             <div><img class="img-responsive" src={bryan3} alt="bryan"/></div>
           </Slider>
          </div>
      </div>
    );
  }
}

export default Carousel;
