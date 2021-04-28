import React from 'react';
import dog_orange from './img/dog_orange.jpeg';
import dog_blue from './img/dog_blue.jpeg';

function Home() {

    return (
        <div className="home">
        <div className="home_info">
           <h2 className="home_welcome">Welcome to</h2>
           <h1 className="home_title">Doggy Daycare</h1>
           <h3>A place for your dog to meet and play with friends.</h3>
           <br></br>
           <p>Click Dogs to checkout our gang.</p>
           <p>Maybe you'll find some friends.</p>
         </div>
        <div className="home_images">
           <img src={dog_blue} alt="Logo" className="home_image"/>
           <img src={dog_orange} alt="Logo" className="home_image"/>
          </div>
        </div>
    )
}

export default Home
