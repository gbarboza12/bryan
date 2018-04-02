import React from 'react';
import mom from '../images/mom.jpg';
import chiq from '../images/chiq.jpg';

class Family extends React.Component {

  render() {
    return (
       <div class="content">
        <div class="mom">
          <figure class="family_pic">
            <img src={mom} alt="Mom and I at Starved Rock State Park" />
            </figure>
          <figcaption class="family_caption">
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

       </div>
    );
  }
}

export default Family;
