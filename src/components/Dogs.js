import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


function Dogs(props) {

    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetchDogs();
    }, []);

    const fetchDogs = async () => {
        const data = await fetch(
            'https://api.jsonbin.io/b/5f4d604b514ec5112d136cd6'
        );

        const dogs = await data.json();
        //console.table(dogs);
        setDogs(dogs);
    }


    return (
        <div>
            {dogs.map(dog => (
                <Link to={`/dogs/${dog.chipNumber}`} key={dog.chipNumber}>
                <div key={dog.chipNumber}>
                <img src={dog.img} alt={dog.name}></img>
                <h1>{dog.name}</h1>
                </div>
                </Link>
            ))}
        </div>
    )
}

export default Dogs
