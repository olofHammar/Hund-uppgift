import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import api from './api';

function Row({ title }) {
    const [dogs, setDogs] = useState([]);
    const [dogsPresent, setDogsPresent] = useState([]);
    let dogsAway = [];
    let left = '<';
    let right = '>';

    useEffect(() => {
        async function fetchData() {
            const request = await api.get();
                setDogs(request.data);

                if (title === 'Checked-In') {
                    dogs.map( dog => {
                        if (dog.present) {
                            setDogsPresent([...dogsPresent], dog);
                        }
                       // setDogs(dogsPresent);
                        console.log(dogsPresent.length);
                        setDogs(dogsPresent);
                    }) 
                    //console.log(dogsPresent.length);
                }
                else if (title === 'Away') {
                    dogs.map( dog => {
                        if (!dog.present) {
                            dogsAway.push(dog);
                        }
                    })
                    console.log(dogsAway.length);
                }

            return request;
        };
        fetchData();
    }, [title]);


    const scrollRight = (e) => {
        e.preventDefault()
        let container = document.getElementById('rd')
        let containerScrollPosition = document.getElementById('rd').scrollLeft
        console.log(containerScrollPosition)
        
        container.scrollTo({
            left: containerScrollPosition + 700,
            behavior: 'smooth'
        })
    }

    const scrollLeft = (e) => {
        e.preventDefault()
        let container = document.getElementById('rd')
        let containerScrollPosition = document.getElementById('rd').scrollLeft
        console.log(containerScrollPosition)
        
        container.scrollTo({
            left: containerScrollPosition - 700,
            behavior: 'smooth'
        })
    }
    
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_dogs" id="rd">
                <button onClick={scrollLeft} className="arrow__btn left-arrow">{left}</button>
                {dogs.map( dog => (
                    <Link to={`/dogs/${dog.chipNumber}`} key={dog.chipNumber} style={{ textDecoration: "none"}}>
                       <img 
                        className="row_dog"
                        src={dog.img} alt={dog.name}/>
                      </Link>  
                ))}
               <button onClick={scrollRight} className="arrow__btn right-arrow">{right}</button>
            </div>
        </div>
    )
}

export default Row
