import React, {useEffect} from 'react';
import dog_three_ from './img/dog_three_.png';
import dog_orange from './img/dog_orange.jpeg';

function Home() {
    /*
       useEffect(() => {
        async function fetchData() {
            fetch('https://api.jsonbin.io/b/5f4d604b514ec5112d136cd6')
              .then(response => response.json())
              .then(data => console.log(data));
        }
        fetchData();
    }, []);
*/
    return (
        <div className="home">
           <h1 className="home_title">Welcome page</h1> 
           <img src={dog_orange} alt="Logo" className="home_image"/>
        </div>
    )
}

export default Home
