import React, {useState, useEffect} from 'react'

function DogDetail({match}) {
    
    const [newDog, setNewDog] = useState({
        name: '', 
        breed: '',
        owner: '',
    });

    useEffect(() => {
        fetchDog();
    }, []);

    const fetchDog = async () => {
        const data = await fetch(
            'https://api.jsonbin.io/b/5f4d604b514ec5112d136cd6'
        );

        const dogs = await data.json();
        dogs.map( dog => {
            if(dog.chipNumber === match.params.id) {
                setNewDog(dog);
            }
        })
            
    }

    return (
        <div className="dog-detail">
            <h2>{newDog.name}</h2> 
            <img className="detail-image" src={newDog.img} alt={newDog.name}></img>
            <h2>Breed: {newDog.breed}</h2>
            <h2>Owner: {newDog.owner.name} </h2>


        </div>
    )
}

export default DogDetail;
