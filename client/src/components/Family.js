import React from 'react';
import mom from '../images/mom.jpg';
import chiq from '../images/chiq.jpg';
import bruce from '../images/bruce.jpg';
import '../css/Family.css';

class Family extends React.Component {

  render() {
    return (
       <div class="content">
        <div class="family">
          <figure class="family_pic">
            <img src={mom} alt="Mom and I at Starved Rock State Park" />
            </figure>
          <figcaption class="family_caption">
            <h2>Mom</h2>
             This is my mom. She has abandoned me twice throughout my life. The first
             time was when she "went to college" in Austin and left me behind with
             my grandparents. After that ordeal, she moved back home with me, and we
             lived happily for four years-- that is until she decided to kidnap me and take me
             to Chicago. At first, I was okay with the move because I had just recently
             gotten divorced, and I wanted a fresh start. Eventually I got sick
             of being couped up in an apartment all day while my mom was "at work".
             Moreover, I was unable to sun bathe at my leisure and I was turning pale!
             Luckily my grandparents picked me up and took me back home. I kind
             of miss my mom and running with her in the clearing behind the apartment,
             but I am much happier now and that is all that matters.
           </figcaption>
       </div>

       <div class="family">
         <figure class="family_pic">
           <img src={chiq} alt="My husband" />
         </figure>
         <figcaption class="family_caption">
           <h2>Chiqui</h2>
            This is my husband, Chiquilin. He is the love of my life. We have gotten
            married twice. He has taught me how to be tolerant and open-minded of
            people from different backgrounds. Even though he is always getting into
            trouble for stealing food off the kitchen counters, he is the most kind
            and loyal dog I have ever met. He protects me during thunderstorms and he
            keeps other dogs and people away when they try to approach me. I love him.
          </figcaption>
       </div>

       <div class="family">
         <figure class="family_pic">
           <img src={bruce} alt="My step brother" />
         </figure>
         <figcaption class="family_caption">
           <h2>Bruce</h2>
            This is my step brother, Bruce. He aspires to be just like me. He goes crazy
            every time he sees another dog, so I can only stand small doses of him.
            Maybe if he learns how to control himself I will teach him my ways.
          </figcaption>
       </div>

       </div>
    );
  }
}

export default Family;
